import { apiClient } from '../api/api';
const url = '/blogs';

// const setToken = (newToken) => {
//   token = `bearer ${newToken}`;
// };

const getAll = async () => {
  const response = await apiClient.get(url);
  return response.data;
};

const create = async (newObject) => {
  try {
    console.log('blog create action');
    const response = await apiClient.post(url, newObject);
    console.log('response', response);
    return response.data;
  } catch (error) {
    if (error.status === 400) {
      throw new Error('User not found!');
    }
    throw new Error('Something went wrong');
  }
};

const update = async (object, id) => {
  const response = await apiClient.put(`${url}/${id}`, object);
  return response.data;
};

const remove = async (id) => {
  const response = await apiClient.delete(`${url}/${id}`);
  return response.data;
};

export default { getAll, create, update, remove };
