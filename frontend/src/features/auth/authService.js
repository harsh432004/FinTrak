// import axios from 'axios'
// import { API_URL } from '../constants'
// // const API_URL = `${import.meta.env.VITE_URL}/api/users/`
// // const API_URL = 'http://localhost:8080/api/users/'
// console.log('FROM AUTH', API_URL)

// const login = async (userData) => {
//   const response = await axios.post(API_URL + '/api/users/login', userData)

//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data))
//   }
//   return response.data
// }
// const onSubmit = (e) => {
//   e.preventDefault();

//   if (validateInputs()) {
//       const userData = {
//           name,
//           email,
//           password,
//           phone,
//           address,
//           identificationType,
//       };

//       console.log('User Data:', userData); // Debug log

//       dispatch(register(userData));
//   }
// };

// // const register = async (userData) => {
// //   const response = await axios.post(API_URL + '/api/users/register', userData)
// //   if (response.data) {
// //     localStorage.setItem('user', JSON.stringify(response.data))
// //   }
// //   return response.data
// // }
// const register = async (userData) => {
//   try {
//       const response = await axios.post(API_URL + '/api/users/register', userData);
//       if (response.data) {
//           localStorage.setItem('user', JSON.stringify(response.data));
//       }
//       return response.data;
//   } catch (error) {
//       console.error('Error during registration:', error.response || error.message);
//       throw error;
//   }
// };

// const getAllUsers = async (token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }
//   const response = await axios.get(API_URL + '/api/users/get_users', config)
//   return response.data
// }

// const logout = () => localStorage.removeItem('user')

// const authService = {
//   login,
//   logout,
//   register,
//   getAllUsers,
// }

// export default authService
import axios from 'axios';

// Determine the API URL from environment variables or fallback to localhost
const API_URL = import.meta.env.VITE_URL
  ? `${import.meta.env.VITE_URL}/api/users`
  : 'http://localhost:8080/api/users';

console.log('FROM AUTH', API_URL); // Debug log to confirm correct API URL

// Create an Axios instance for cleaner requests
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to handle user registration
const register = async (userData) => {
  try {
    const response = await apiClient.post('/register', userData); // Ensure endpoint is correct
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data)); // Save user data to localStorage
    }
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error.response?.data || error.message); // Log detailed error
    throw error; // Re-throw error for further handling
  }
};

// Function to handle user login
const login = async (userData) => {
  try {
    const response = await apiClient.post('/login', userData); // Ensure endpoint is correct
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data)); // Save user data to localStorage
    }
    return response.data;
  } catch (error) {
    console.error('Error during login:', error.response?.data || error.message); // Log detailed error
    throw error; // Re-throw error for further handling
  }
};

// Function to fetch all users (requires authorization token)
const getAllUsers = async (token) => {
  try {
    const response = await apiClient.get('/get_users', {
      headers: {
        Authorization: `Bearer ${token}`, // Attach token in headers
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching all users:', error.response?.data || error.message); // Log detailed error
    throw error; // Re-throw error for further handling
  }
};

// Function to handle user logout
const logout = () => {
  localStorage.removeItem('user'); // Remove user data from localStorage
};

// Export all functions as part of the authService object
const authService = {
  register,
  login,
  getAllUsers,
  logout,
};

export default authService;