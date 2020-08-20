// 所有类目的接口

import axios from '@/axios';

export default {
  list(params) {
    return axios.get('/category/all', { params });
  },
};
