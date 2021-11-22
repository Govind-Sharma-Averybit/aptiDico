import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import { LOGIN_USER, VERIFY_OTP ,ADD_FIREBASE_TOKEN_IN_DATABASE} from "../../utilities/Constants/actionTypes";

import {
  loginUserSuccess,
  loginUserFailure,
  loginUserError,
  verifyOTPSuccess,
  verifyOTPFailure,
  verifyOTPError,
  addFirebaseTokenSuccess,
  addFirebaseTokenFailure,
  addFirebaseTokenError
} from "./actions";
import { loginUserAPI, verifyOTPAPI,addFirebaseTokenAPI } from "../../api/user";

export function* loginUser({ payload }) {
  let { CompanySlug, PhoneNumber, CountryCode } = payload;
  // console.log("saga calling", CompanySlug, PhoneNumber, CountryCode);
  try {
    const response = yield call(
      loginUserAsync,
      CompanySlug,
      PhoneNumber,
      CountryCode
    );
    // console.log("login api res", response);
    if (response && response.status) {
      yield put(loginUserSuccess(response.message));
    } else if (!response.status) {
      yield put(loginUserFailure(response));
    } else if (response !== null && response !== undefined) {
      yield put(loginUserFailure(response));
    } else {
      yield put(loginUserError());
    }
  } catch (error) {
    // catch throw
    yield put(loginUserError());
  }
}

const loginUserAsync = async (CompanySlug, PhoneNumber, CountryCode) => {
  return loginUserAPI(CompanySlug, PhoneNumber, CountryCode)
    .then((res) => res)
    .catch((err) => err);
};

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginUser);
}

export function* verifyOTP({ payload }) {
  let { CompanySlug, PhoneNumber, CountryCode, otp } = payload;
  try {
    const response = yield call(
      verifyOTPAsync,
      CompanySlug,
      PhoneNumber,
      CountryCode,
      otp
    );
    // console.log("verify otp api res", response);
    if (response && response.status) {
      yield put(verifyOTPSuccess(response));
    } else if (response.status === 500) {
      yield put(verifyOTPFailure(response.data));
    } else if (response !== null && response !== undefined) {
      yield put(verifyOTPFailure(response));
    } else {
      yield put(verifyOTPError());
    }
  } catch (error) {
    // catch throw
    yield put(verifyOTPError());
  }
}

const verifyOTPAsync = async (CompanySlug, PhoneNumber, CountryCode, otp) => {
  return verifyOTPAPI(CompanySlug, PhoneNumber, CountryCode, otp)
    .then((res) => res)
    .catch((err) => err);
};

export function* watchVerifyOTP() {
  yield takeEvery(VERIFY_OTP, verifyOTP);
}


//*********************** */

export function* addFirebaseToken({ payload }) {
  let {deviceId, authToken } = payload;
  try {
    const response = yield call(addFirebaseTokenAsync,deviceId,authToken);
    console.log("add firebase token api res", response);
    if (response.data !== null && response.status) {
      yield put(addFirebaseTokenSuccess(response.data));
    } else if (response.status === 500) {
      yield put(addFirebaseTokenFailure(response));
    } else if (response !== null && response !== undefined) {
      yield put(addFirebaseTokenFailure(response));
    } else {
      yield put(addFirebaseTokenError());
    }
  } catch (error) {
    // catch throw
    yield put(addFirebaseTokenError());
  }
}

const addFirebaseTokenAsync = async (deviceId, authToken) => {
  return addFirebaseTokenAPI(deviceId, authToken)
    .then((res) => res)
    .catch((err) => err);
};

export function* watchAddFirebaseToken() {
  yield takeEvery(ADD_FIREBASE_TOKEN_IN_DATABASE, addFirebaseToken);
}
//************************************** */

export default function* rootSaga() {
 
  yield all([fork(watchLoginUser), fork(watchVerifyOTP),fork(watchAddFirebaseToken)]);
}
