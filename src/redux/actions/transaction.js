import http from '../../helpers/http';
import qs from 'qs';

export const orderCount = (stock, startDate, endDate, day) => {
  return dispatch => {
    dispatch({
      type: 'ORDER_DETAIL',
      payload: {
        stock,
        startDate,
        endDate,
        day,
      },
    });
  };
};

export const orderDetail = (
  idCardNumber,
  rentName,
  mobilePhone,
  emailAddress,
  location,
  paymentType,
  paymentCode,
  bookingCode,
) => {
  return dispatch => {
    dispatch({
      type: 'ORDER_DETAILS',
      payload: {
        idCardNumber,
        rentName,
        mobilePhone,
        emailAddress,
        location,
        paymentType,
        paymentCode,
        bookingCode,
      },
    });
  };
};

export const OnCreatePayment = (
  rentStartDate,
  rentEndDate,
  // prepayment,
  userId,
  vehicleId,
  qty,
  idCardNumber,
  rentName,
  mobilePhone,
  emailAddress,
  location,
  paymentType,
  paymentCode,
  bookingCode,
) => {
  const dataa = {
    rentStartDate: rentStartDate,
    rentEndDate: rentEndDate,
    // prepayment: prepayment,
    userId: userId,
    vehicleId: vehicleId,
    qty: qty,
    idCardNumber: idCardNumber,
    rentName: rentName,
    mobilePhone: mobilePhone,
    emailAddress: emailAddress,
    location: location,
    paymentType: paymentType,
    paymentCode: paymentCode,
    bookingCode: bookingCode,
  };
  return async dispatch => {
    try {
      dispatch({
        type: 'CLEAR_ERROR',
      });
      const { data } = await http().post('/history', qs.stringify(dataa));
      console.log(data);
      dispatch({
        type: 'CREATE_TRANSACTION',
        payload: data.results,
      });
      dispatch({
        type: 'CLEAR_ERROR_HISTORY',
      });
    } catch (err) {
      let payload = '';
      if (err.response) {
        payload = err.response.data.error;
      } else {
        payload = err.message;
      }
      dispatch({
        type: 'CREATE_ERROR',
        payload: payload,
      });
    }
  };
};
