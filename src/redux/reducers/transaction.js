const initialState = {
  day: '',
  stock: 0,
  startDate: '',
  endDate: '',
  idCardNumber: '',
  rentName: '',
  mobilePhone: '',
  emailAddress: '',
  location: '',
  paymentType: '',
  paymentCode: '',
  bookingCode: '',
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case 'ORDER_DETAIL': {
      const data = action.payload;
      return {
        ...state,
        stock: data.stock,
        startDate: data.startDate,
        endDate: data.endDate,
        dat: data.day,
      };
    }
    case 'ORDER_DETAILS': {
      const data = action.payload;
      return {
        ...state,
        idCardNumber: data.idCardNumber,
        rentName: data.rentName,
        mobilePhone: data.mobilePhone,
        emailAddress: data.emailAddress,
        location: data.location,
        paymentType: data.paymentType,
        paymentCode: data.paymentCode,
        bookingCode: data.bookingCode,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default transaction;
