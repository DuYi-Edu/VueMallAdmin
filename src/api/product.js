import axios from '@/axios';

export default {
  list(params) {
    return axios.get('/products/all', { params });
  },
  remove(params) {
    return axios.delete(`/products/${params.id}`);
  },
  add(params) {
    return axios.post('/products/add', params);
  },
};
