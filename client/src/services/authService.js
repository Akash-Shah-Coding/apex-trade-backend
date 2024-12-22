import axios from 'axios';
const API_URL = import.meta.env.VITE_BACKEND_API_URL;  // Testing local

// Login Function
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, credentials, {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    });
    return response.data; 
  } catch (error) {
    throw new Error('Login failed: ' + error.response?.data?.message || error.message);
  }
};

// Fetch User Function
export const fetchUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/user/me`, {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    });
    return response.data; 
  } catch (error) {
    throw new Error('Failed to fetch user: ' + error.response?.data?.message || error.message);
  }
};

// export const logout = async () => {
//     await axios.post(`${API_URL}/logout`);
// };

// export const fetchUser = async (token) => {
//     const response = await axios.get(`${API_URL}/me`, {
//         headers: { Authorization: `Bearer ${token}` }
//     });
//     return response.data; // Assumes user data is returned
// };
