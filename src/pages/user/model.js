import * as userApi from './service';

const handleClassListWithStudent = studentList => {
  const classList = {};
  studentList.map(item => {
    if (classList[item.classId]) {
      classList[item.classId].push(item)
    } else {
      classList[item.classId] = [item]
    }
  })
  return classList
}
export default {
  namespace: 'user',
  state: {
      gradList: [],
      classList: {},
      studentList: [],
  },

  effects: {
    * getGradList(_, { call, put }) {
      const { success, data } = yield call(userApi.getGradList, {});
      if (success) {
        yield put({ type: 'saveGradList',
          payload: {
            gradList: data,
          } });
        
      }
    },
    * getStudentList(_, { call, put }) {
      const { success, data } = yield call(userApi.getStudentList, {});
      if (success) {
        yield put({ type: 'saveStudentList',
          payload: {
            classList: handleClassListWithStudent(data),
            studentList: data,
          } });
      }
    },
  },

  reducers: {
    saveGradList(state, { payload }) {
      return { ...state, ...payload };
    },
    saveClassList(state, { payload }) {
      return { ...state, ...payload };
    },
    saveStudentList(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
