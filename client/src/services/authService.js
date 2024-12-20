import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_API_URL;  // Testing local
console.log('====================================');
console.log(API_URL);
console.log('====================================');
// authService.js
export const login = async (credentials) => {
    const response = await fetch(`${API_URL}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return response.json(); 
};


export const fetchUser = async () => {
    const response = await fetch(`${API_URL}/user/me`, {
        method: 'GET',
        credentials: 'include' 
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return response.json();
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
