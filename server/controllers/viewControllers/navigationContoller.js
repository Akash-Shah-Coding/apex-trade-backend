const { User, UserTree } = require('../../models');

exports.getUsersByRole = async (req, res) => {
  const { userId } = req.params; // Get the userId from request params

  try {
    // Fetch the user to check their role
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.role_id === '1870a2c3-7f7f-4cad-89ab-b903896a9380') {
      // Fetch all Dealers and their Clients
      const dealers = await User.findAll({
        where: { role_id: '827124f2-1fe0-405c-a7b6-4d5b2b101c09' },
        include: [
          {
            model: UserTree,
            as: 'managedUsers',
            include: [
              {
                model: User,
                as: 'child'
              }
            ]
          }
        ]
      });

      return res.json(dealers);

    } else if (user.role_id === '827124f2-1fe0-405c-a7b6-4d5b2b101c09') {
      // Fetch Clients under this Dealer
      const clients = await User.findAll({
        include: [
          {
            model: UserTree,
            as: 'managedUsers', // Fetch managed users for this dealer
            where: { parent_id: userId }, // Show only children of this dealer
            include: [
              {
                model: User,
                as: 'child' // Include child user details
              }
            ]
          }
        ]
      });

      return res.json(clients);
    } else {
      return res.status(403).json({ error: 'Access denied' }); // Other roles can be restricted
    }

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
