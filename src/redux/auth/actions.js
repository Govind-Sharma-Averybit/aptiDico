import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_ERROR,
  LOGIN_USER_RESET,
  VERIFY_OTP,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_ERROR,
  VERIFY_OTP_RESET,
  ADD_FIREBASE_TOKEN_IN_DATABASE,
  ADD_FIREBASE_TOKEN_IN_DATABASE_SUCCESS,
  ADD_FIREBASE_TOKEN_IN_DATABASE_FAILURE,
  ADD_FIREBASE_TOKEN_IN_DATABASE_ERROR,
  ADD_FIREBASE_TOKEN_IN_DATABASE_RESET,
} from "../../utilities/Constants/actionTypes";

export const loginUser = (CompanySlug, PhoneNumber, CountryCode) => ({
  type: LOGIN_USER,
  payload: { CompanySlug, PhoneNumber, CountryCode },
});
export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});
export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});
export const loginUserError = () => ({
  type: LOGIN_USER_ERROR,
  payload: null,
});
export const loginUserReset = () => ({
  type: LOGIN_USER_RESET,
  payload: null,
});

export const verifyOTP = (CompanySlug, PhoneNumber, CountryCode, otp) => ({
  type: VERIFY_OTP,
  payload: { CompanySlug, PhoneNumber, CountryCode, otp },
});
export const verifyOTPSuccess = (user) => ({
  type: VERIFY_OTP_SUCCESS,
  payload: user,
});
export const verifyOTPFailure = (error) => ({
  type: VERIFY_OTP_FAILURE,
  payload: error,
});
export const verifyOTPError = () => ({
  type: VERIFY_OTP_ERROR,
  payload: null,
});
export const verifyOTPReset = () => ({
  type: VERIFY_OTP_RESET,
  payload: null,
});

export const addFirebaseToken = (deviceId, authToken) => ({
  type: ADD_FIREBASE_TOKEN_IN_DATABASE,
  payload: { deviceId, authToken},
});
export const addFirebaseTokenSuccess = (data) => ({
  type: ADD_FIREBASE_TOKEN_IN_DATABASE_SUCCESS,
  payload: data,
});
export const addFirebaseTokenFailure = (error) => ({
  type: ADD_FIREBASE_TOKEN_IN_DATABASE_FAILURE,
  payload: error,
});
export const addFirebaseTokenError = () => ({
  type: ADD_FIREBASE_TOKEN_IN_DATABASE_ERROR,
  payload: null,
});
export const addFirebaseTokenReset = () => ({
  type: ADD_FIREBASE_TOKEN_IN_DATABASE_RESET,
  payload: null,
});
