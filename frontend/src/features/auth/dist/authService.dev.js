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
"use strict";
//# sourceMappingURL=authService.dev.js.map
