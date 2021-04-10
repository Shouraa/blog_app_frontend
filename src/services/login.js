import axios from 'axios';
const baseUrl = '/api/login';

const login = async (credentials) => {
  try {
    const response = await axios.post(baseUrl, credentials);
    if (response.status !== 200) {
      throw new Error('Something went wrong');
    }
    return response;
  } catch (error) {
    if (error.status === 400) {
      throw new Error('User not found!');
    }
    throw new Error('Something went wrong');
  }
};

export default { login };
