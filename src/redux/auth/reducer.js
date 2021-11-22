import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_ERROR,
  LOGIN_USER_RESET,
  VERIFY_OTP,
  VERIFY_OTP_ERROR,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_RESET,
  VERIFY_OTP_SUCCESS,
  ADD_FIREBASE_TOKEN_IN_DATABASE,
  ADD_FIREBASE_TOKEN_IN_DATABASE_SUCCESS,
  ADD_FIREBASE_TOKEN_IN_DATABASE_FAILURE,
  ADD_FIREBASE_TOKEN_IN_DATABASE_ERROR,
  ADD_FIREBASE_TOKEN_IN_DATABASE_RESET,
} from "../../utilities/Constants/actionTypes";

const getAuthUser = () => {
  try {
    AsyncStorage.getItem("user")
      .then((res) => {
        console.log("user detail", JSON.parse(res));
      })
      .catch((err) => {
        console.log("error message", err);
      });
  } catch (error) {
    console.log("error message", error);
  }
};

const INIT_STATE = {
  user: null,
  loading: false,
  status: null,
  result: "",
  data: null,
  changeLoading: false,
  changeStatus: "none",
  forgotLoading: false,
  forgotStatus: "none",
  industrystatus: "none",
  forgotPasswordError: "",
  changePasswordError: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, loginstatus: "none" };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loginstatus: "success",
        user: action.payload,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        loginstatus: "failure",
        result: action.payload,
      };
    case LOGIN_USER_ERROR:
      return { ...state, loading: false, loginstatus: "error" };
    case LOGIN_USER_RESET:
      return { ...state, loading: false, loginstatus: "reset", result: "" };

    case VERIFY_OTP:
      return { ...state, loading: true, status: "none" };
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
        user: action.payload,
      };
    case VERIFY_OTP_FAILURE:
      return {
        ...state,
        loading: false,
        status: "failure",
        result: action.payload,
      };
    case VERIFY_OTP_ERROR:
      return { ...state, loading: false, status: "error" };
    case VERIFY_OTP_RESET:
      return { ...state, loading: false, status: "reset", result: "" };

    
      case ADD_FIREBASE_TOKEN_IN_DATABASE:
        return { ...state, loading: true, addfirebasetokenstatus: "none" };
      case ADD_FIREBASE_TOKEN_IN_DATABASE_SUCCESS:
        return {
          ...state,
          loading: false,
          addfirebasetokenstatus: "success",
          data: action.payload,
        };
      case ADD_FIREBASE_TOKEN_IN_DATABASE_FAILURE:
        return {
          ...state,
          loading: false,
          addfirebasetokenstatus: "failure",
          result: action.payload,
        };
      case ADD_FIREBASE_TOKEN_IN_DATABASE_ERROR:
        return { ...state, loading: false, addfirebasetokenstatus: "error" };
      case ADD_FIREBASE_TOKEN_IN_DATABASE_RESET:
        return {
          ...state,
          loading: false,
          addfirebasetokenstatus: "reset",
          result: "",
        };  

    default:
      return { ...state };
  }
};
