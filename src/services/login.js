import { apiClient } from '../api/api';
const baseUrl = '/users';

const signin = async (formData) => {
  try {
    const response = await apiClient.post(`${baseUrl}/signin`, formData);
    console.log('first response from loginServices', response);

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

const signup = async (formData) => {
  try {
    const response = await apiClient.post(`${baseUrl}/signup`, formData);
    console.log('second response from loginServices', response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default { signin, signup };
