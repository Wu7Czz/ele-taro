import Request from '../../utils/request';

export const getSumData = (data) => {
  return Request({
    url: 'getSumData',
    method: 'GET',
    data,
  });
};
export const getSepicalDate = (data) => {
  return Request({
    url: 'getSepicalDate',
    method: 'GET',
    data,
  });
};


