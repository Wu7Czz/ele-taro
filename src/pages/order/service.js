import Request from '../../utils/request';

export const getCustomerOrderInfo = (data) => {
  return Request({
    url: 'getCustomerOrderInfo',
    method: 'GET',
    data,
  });
};
export const demo = (data) => {
  return Request({
    url: 'getCustomerOrderInfo',
    method: 'GET',
    data,
  });
};
