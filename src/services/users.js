import { apiClient } from '../api/api';
const baseUrl = '/users';

const getAll = async () => {
  try {
    const response = await apiClient.get(baseUrl);
    return response.data;
  } catch (error) {
    if (error.response.status === 404) {
      throw new Error('Not found');
    }
  }
};

export default { getAll };
