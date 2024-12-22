const { User, UserTree, RolePermission, Role } = require('../../models');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create a User (Dealer or Client)
exports.createUser = async (req, res) => {
  try {
    const { username, password, email, role_id, parent_id, permissionIds } = req.body;
    console.log(" req body ", req.body);

    // Check for existing user with the same email
    const existingUserByEmail = await User.findOne({ where: { email } });
    if (existingUserByEmail) {
      return res.status(400).json({ error: 'Email is already in use.' });
    }

    // Check for existing user with the same username
    const existingUserByUsername = await User.findOne({ where: { username } });
    if (existingUserByUsername) {
      return res.status(400).json({ error: 'Username is already taken.' });
    }

    // Validate role_id exists
    const roleExists = await Role.findByPk(role_id);
    if (!roleExists) {
      return res.status(400).json({ error: 'Invalid role ID.' });
    }

    // Validate parent exists (check against User table)
    if (parent_id) {
      const parentExists = await User.findByPk(parent_id);
      if (!parentExists) {
        return res.status(400).json({ error: 'Invalid Parent ID.' });
      }
    }

    // Check for duplicate permissions
    if (permissionIds && permissionIds.length > 0) {
      const duplicatePermissions = permissionIds.filter((item, index) => permissionIds.indexOf(item) !== index);

      if (duplicatePermissions.length > 0) {
        return res.status(400).json({
          error: `Duplicate permissions found: ${duplicatePermissions.join(', ')}`
        });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // Create the user
    const user = await User.create({
      id: uuidv4(),
      username,
      password: hashedPassword,
      email,
      role_id,
    });

    //parent in UserTree if there's a parent
    if (parent_id) {
      await UserTree.create({
        id: uuidv4(),
        parent_id,
        user_id: user.id,
      });
    }

    //permissions to the user (Role Permissions)
    if (permissionIds && permissionIds.length > 0) {
      const rolePermissions = permissionIds.map((permissionId) => ({
        id: uuidv4(),
        role_id: role_id,
        permission_id: permissionId,
      }));

      await RolePermission.bulkCreate(rolePermissions);
    }

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// User login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Create JWT token
    const token = jwt.sign({ id: user.id, role_id: user.role_id }, process.env.JWT_SECRET || 'AkashShah', {
      expiresIn: '28h'
    });
    // Set the token as an HttpOnly cookie 
    res.cookie('token', token,
      {
        httpOnly: true,
        secure: true,
        maxAge: 1000 * 60 * 60 * 28,  //28 hours
        sameSite: 'none'
      });
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err });
  }
};

// Check Auth 
exports.checkUser = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'AkashShah');
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

// Update a User Role
exports.updateUserRole = async (req, res) => {
  try {
    const { userId, newRoleId } = req.body;

    // Find user and update role
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.role_id = newRoleId;
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Assign Permissions to a User
exports.assignPermissionsToUser = async (req, res) => {
  try {
    const { userId, permissionIds } = req.body;

    // Remove existing permissions for this user
    await RolePermission.destroy({ where: { user_id: userId } });

    // Assign new permissions
    const rolePermissions = permissionIds.map((permissionId) => ({
      id: uuidv4(), // Generate UUID
      user_id: userId,
      permission_id: permissionId,
    }));

    await RolePermission.bulkCreate(rolePermissions);

    res.status(200).json({ message: 'Permissions updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
