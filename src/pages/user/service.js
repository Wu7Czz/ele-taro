import Request from '../../utils/request';

export const getGradList = (data) => {
  return Request({
    url: 'getGradList',
    method: 'GET',
    data,
  });
};

export const getStudentList = (data) => {
  return Request({
    url: 'getStudentList',
    method: 'GET',
    data,
  });
};

