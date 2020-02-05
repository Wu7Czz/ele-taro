import * as indexApi from './service';

export default {
  namespace: 'index',
  state: {
    sepicalDate: []
  },

  effects: {
    * getSepicalDate (_, { call, put }) {
      const { success, data } = yield call(indexApi.getSepicalDate, {});
      if (success) {
        yield put({ type: 'saveSepicalDate',
          payload: {
            sepicalDate: data,
          } });
      }
    },
  },

  reducers: {
    saveSepicalDate(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
