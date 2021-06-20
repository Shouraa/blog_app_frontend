import { apiClient } from '../api/api';
const url = '/blogs';

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

const update = async (id, updatedBlog) => {
  const response = await apiClient.patch(`${url}/${id}`, updatedBlog);
  return response.data;
};

const remove = async (id) => {
  const response = await apiClient.delete(`${url}/${id}`);
  return response.data;
};

const like = async (id) => {
  const response = await apiClient.patch(`${url}/${id}/like`);
  console.log('object', response.data);
  return response.data;
};

export default { getAll, create, update, remove, like };
