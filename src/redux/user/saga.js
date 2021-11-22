import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {
  OWNER_PROFILE,
  UPDATE_OWNER_PROFILE,
  ADD_PROFILE_PICTURE,
  OWNER_PROPERTY,
  PROPERTY_NEWSLETTERS_MILESTONE,
  PROPERTY_VIDEOS,
  OWNER_PROPERTY_DOCUMENTS,
  TRANSACTIONS,
  NOTIFICATION,
  NEW_NOTIFICATION,
  GET_ALL_RAISED_TICKETS,
  ADD_NEW_TICKET,
  GET_ALL_CONVERSATIONS,
  SEND_MESSAGE,
  GET_CONTACT_DETAILS,
  SUBMIT_CONTACT_FORM,
  GET_OWNER_DOCUMENT_URI
} from "../../utilities/Constants/actionTypes";

import {
  ownerProfileSuccess,
  ownerProfileFailure,
  ownerProfileError,
  updateOwnerProfileSuccess,
  updateOwnerProfileFailure,
  updateOwnerProfileError,
  addProfilePictureSuccess,
  addProfilePictureFailure,
  addProfilePictureError,
  ownerPropertySuccess,
  ownerPropertyFailure,
  ownerPropertyError,
  propertyNewslettersMilestoneSuccess,
  propertyNewslettersMilestoneFailure,
  propertyNewslettersMilestoneError,
  propertyVideosSuccess,
  propertyVideosFailure,
  propertyVideosError,
  ownerPropertyDocumentsSuccess,
  ownerPropertyDocumentsFailure,
  ownerPropertyDocumentsError,
  transactionsSuccess,
  transactionsFailure,
  transactionsError,
  notificationSuccess,
  notificationFailure,
  notificationError,
  newNotificationSuccess,
  newNotificationFailure,
  newNotificationError,
  getAllRaisedTicketsSuccess,
  getAllRaisedTicketsFailure,
  getAllRaisedTicketsError,
  addNewTicketSuccess,
  addNewTicketFailure,
  addNewTicketError,
  getAllConversationsSuccess,
  getAllConversationsFailure,
  getAllConversationsError,
  sendMessageSuccess,
  sendMessageFailure,
  sendMessageError,
  getContactDetailsSuccess,
  getContactDetailsFailure,
  getContactDetailsError,
  submitContactFormSuccess,
  submitContactFormFailure,
  submitContactFormError,
  getOwnerDocumentsURISuccess,
  getOwnerDocumentsURIFailure,
  getOwnerDocumentsURIError
} from "./actions";
import {
  ownerProfileAPI, updateOwnerProfileAPI, addProfilePictureAPI, ownerPropertyAPI,
  propertyNewslettersMilestoneAPI, propertyVideosAPI, ownerPropertyDocumentsAPI,
  transactionsAPI, notificationAPI, getAllRaisedTicketsAPI, addNewTicketAPI,
  newNotificationAPI, getAllConversationsAPI, sendMessageAPI,getContactDetailsAPI,submitContactFormAPI,getOwnerDocumentsURIAPI
} from "../../api/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

//*********************** */

export function* ownerProfile({ payload }) {
  let { authToken } = payload;
  try {
    const response = yield call(ownerProfileAsync, authToken);
    // console.log("owner profile api res", response);
    if (response.data !== null && response.status) {
      yield put(ownerProfileSuccess(response.data));
    } else if (response.status === 500) {
      yield put(ownerProfileFailure(response));
    } else if (response !== null && response !== undefined) {
      yield put(ownerProfileFailure(response));
    } else {
      yield put(ownerProfileError());
    }
  } catch (error) {
    // catch throw
    yield put(ownerProfileError());
  }
}

const ownerProfileAsync = async (authToken) => {
  return ownerProfileAPI(authToken)
    .then((res) => res)
    .catch((err) => err);
};

export function* watchOwnerProfile() {
  yield takeEvery(OWNER_PROFILE, ownerProfile);
}
//************************************** */

//*********************** */

export function* updateOwnerProfile({ payload }) {
  let { fullName, Address, CorrespondingAddress, authToken } = payload;
  // console.log('saga response', fullName, Address, CorrespondingAddress, authToken)
  try {
    const response = yield call(
      updateOwnerProfileAsync,
      fullName,
      Address,
      CorrespondingAddress,
      authToken
    );
    // console.log("update owner profile api res", response);
    if (response && response.status) {
      yield put(updateOwnerProfileSuccess(response.message));
    } else if (response.status === 500) {
      yield put(updateOwnerProfileFailure(response));
    } else if (response !== null && response !== undefined) {
      yield put(updateOwnerProfileFailure(response));
    } else {
      yield put(updateOwnerProfileError());
    }
  } catch (error) {
    // catch throw
    yield put(updateOwnerProfileError());
  }
}

const updateOwnerProfileAsync = async (
  fullName,
  Address,
  CorrespondingAddress,
  authToken
) => {
  return updateOwnerProfileAPI(
    fullName,
    Address,
    CorrespondingAddress,
    authToken
  )
    .then((res) => res)
    .catch((err) => err);
};

export function* watchUpdateOwnerProfile() {
  yield takeEvery(UPDATE_OWNER_PROFILE, updateOwnerProfile);
}
//************************************** */


//*********************** */

export function* addProfilePicture({ payload }) {
  let { authToken, profilePicUrl } = payload;
  try {
    const response = yield call(
      addProfilePictureAsync,
      authToken,
      profilePicUrl
    );
    console.log("add profile picture api res", response);
    if (response && response.status) {
      yield put(addProfilePictureSuccess(response.message));
    } else if (response.status === 500) {
      yield put(addProfilePictureFailure(response));
    } else if (response !== null && response !== undefined) {
      yield put(addProfilePictureFailure(response));
    } else {
      yield put(addProfilePictureError());
    }
  } catch (error) {
    // catch throw
    yield put(addProfilePictureError());
  }
}

const addProfilePictureAsync = async (
  authToken,
  profilePicUrl
) => {
  return addProfilePictureAPI(
    authToken,
    profilePicUrl
  )
    .then((res) => res)
    .catch((err) => err);
};

export function* watchAddProfilePicture() {
  yield takeEvery(ADD_PROFILE_PICTURE, addProfilePicture);
}
//************************************** */

//*********************** */

export function* ownerProperty({ payload }) {
  let { authToken } = payload;
  try {
    const response = yield call(
      ownerPropertyAsync,
      authToken
    );
    console.log("owner property api res", response);
    if (response && response.status) {
      yield put(ownerPropertySuccess(response.data));
    } else if (response.status === 500) {
      yield put(ownerPropertyFailure(response));
    } else if (response !== null && response !== undefined) {
      yield put(ownerPropertyFailure(response));
    } else {
      yield put(ownerPropertyError());
    }
  } catch (error) {
    // catch throw
    yield put(ownerPropertyError());
  }
}

const ownerPropertyAsync = async (
  authToken
) => {
  return ownerPropertyAPI(
    authToken
  )
    .then((res) => res)
    .catch((err) => err);
};

export function* watchOwnerProperty() {
  yield takeEvery(OWNER_PROPERTY, ownerProperty);
}
//************************************** */

//*********************** */

export function* propertyNewslettersMilestone({ payload }) {
  let { authToken,
    propertyId,
  } = payload;
  try {
    const response = yield call(
      propertyNewslettersMilestoneAsync,
      authToken,
      propertyId
    );
    // console.log("property newsletters api res", response);
    if (response && response.status) {
      yield put(propertyNewslettersMilestoneSuccess(response.data));
    } else if (response.status === 500) {
      yield put(propertyNewslettersMilestoneFailure(response));
    } else if (response !== null && response !== undefined) {
      yield put(propertyNewslettersMilestoneFailure(response));
    } else {
      yield put(propertyNewslettersMilestoneError());
    }
  } catch (error) {
    // catch throw
    yield put(propertyNewslettersMilestoneError());
  }
}

const propertyNewslettersMilestoneAsync = async (
  authToken,
  propertyId,
) => {
  return propertyNewslettersMilestoneAPI(
    authToken,
    propertyId,
  )
    .then((res) => res)
    .catch((err) => err);
};

export function* watchPropertyNewslettersMilestone() {
  yield takeEvery(PROPERTY_NEWSLETTERS_MILESTONE, propertyNewslettersMilestone);
}
//************************************** */


//*********************** */

export function* propertyVideos({ payload }) {
  let { authToken, propertyId } = payload;
  try {
    const response = yield call(
      propertyVideosAsync,
      authToken,
      propertyId
    );
    // console.log("property videos api res", response);
    // if (response && response.status) {
    //   yield put(propertyVideosSuccess(response.message));
    // } else if (response.status === 500) {
    //   yield put(propertyVideosFailure(response));
    // } else if (response !== null && response !== undefined) {
    //   yield put(propertyVideosFailure(response));
    // } else {
    //   yield put(propertyVideosError());
    // }
  } catch (error) {
    // catch throw
    yield put(propertyVideosError());
  }
}

const propertyVideosAsync = async (
  authToken,
  propertyId
) => {
  return propertyVideosAPI(
    authToken,
    propertyId
  )
    .then((res) => res)
    .catch((err) => err);
};

export function* watchPropertyVideos() {
  yield takeEvery(PROPERTY_VIDEOS, propertyVideos);
}
//************************************** */


//*********************** */

export function* ownerPropertyDocuments({ payload }) {
  let { authToken, id } = payload;
  try {
    const response = yield call(
      ownerPropertyDocumentsAsync,
      authToken,
      id
    );
    // console.log("owner property documents api res", response);
    // if (response && response.status) {
    //   yield put(ownerPropertyDocumentsSuccess(response.message));
    // } else if (response.status === 500) {
    //   yield put(ownerPropertyDocumentsFailure(response));
    // } else if (response !== null && response !== undefined) {
    //   yield put(ownerPropertyDocumentsFailure(response));
    // } else {
    //   yield put(ownerPropertyDocumentsError());
    // }
  } catch (error) {
    // catch throw
    yield put(ownerPropertyDocumentsError());
  }
}

const ownerPropertyDocumentsAsync = async (
  authToken, id
) => {
  return ownerPropertyDocumentsAPI(
    authToken, id
  )
    .then((res) => res)
    .catch((err) => err);
};

export function* watchOwnerPropertyDocuments() {
  yield takeEvery(OWNER_PROPERTY_DOCUMENTS, ownerPropertyDocuments);
}
//************************************** *


//*********************** */

export function* transactions({ payload }) {
  let { authToken, id } = payload;
  try {
    const response = yield call(
      transactionsAsync,
      authToken,
      id
    );
    // console.log("transactions api res", response);
    if (response && response.status) {
      yield put(transactionsSuccess(response.Data));
    } else if (response.status === 500) {
      yield put(transactionsFailure(response));
    } else if (response !== null && response !== undefined) {
      yield put(transactionsFailure(response));
    } else {
      yield put(transactionsError());
    }
  } catch (error) {
    // catch throw
    yield put(transactionsError());
  }
}

const transactionsAsync = async (
  authToken, id
) => {
  return transactionsAPI(
    authToken, id
  )
    .then((res) => res)
    .catch((err) => err);
};

export function* watchTransactions() {
  yield takeEvery(TRANSACTIONS, transactions);
}
//************************************** *

//*********************** */

export function* notification({ payload }) {
  let { authToken } = payload;
  try {
    const response = yield call(notificationAsync, authToken);
    console.log("notification api res", response);
    if (response.data !== null && response.status) {
      yield put(notificationSuccess(response.data));
    } else if (response.status === 500) {
      yield put(notificationFailure(response));
    } else if (response !== null && response !== undefined) {
      yield put(notificationFailure(response));
    } else {
      yield put(notificationError());
    }
  } catch (error) {
    // catch throw
    yield put(notificationError());
  }
}

const notificationAsync = async (authToken) => {
  return notificationAPI(authToken)
    .then((res) => res)
    .catch((err) => err);
};

export function* watchNotification() {
  yield takeEvery(NOTIFICATION, notification);
}
//************************************** */


//*********************** */

export function* newNotification({ payload }) {
  let { authToken } = payload;
  try {
    const response = yield call(newNotificationAsync, authToken);
    console.log("new notification api res", response);
    if (response.data !== null && response.status) {
      yield put(newNotificationSuccess(response.data));
    } else if (response.status === 500) {
      yield put(newNotificationFailure(response));
    } else if (response !== null && response !== undefined) {
      yield put(newNotificationFailure(response));
    } else {
      yield put(newNotificationError());
    }
  } catch (error) {
    // catch throw
    yield put(newNotificationError());
  }
}

const newNotificationAsync = async (authToken) => {
  return newNotificationAPI(authToken)
    .then((res) => res)
    .catch((err) => err);
};

export function* watchNewNotification() {
  yield takeEvery(NEW_NOTIFICATION, newNotification);
}
//************************************** */

//*********************** */

export function* getAllRaisedTickets({ payload }) {
  let { authToken } = payload;
  try {
    const response = yield call(getAllRaisedTicketsAsync, authToken);
    console.log("get All raised tickets api res", response);
    if (response.data !== null && response.status) {
      yield put(getAllRaisedTicketsSuccess(response.data));
    } else if (response.status === 500) {
      yield put(getAllRaisedTicketsFailure(response));
    } else if (response !== null && response !== undefined) {
      yield put(getAllRaisedTicketsFailure(response));
    } else {
      yield put(getAllRaisedTicketsError());
    }
  } catch (error) {
    // catch throw
    yield put(getAllRaisedTicketsError());
  }
}

const getAllRaisedTicketsAsync = async (authToken) => {
  return getAllRaisedTicketsAPI(authToken)
    .then((res) => res)
    .catch((err) => err);
};

export function* watchGetAllRaisedTickets() {
  yield takeEvery(GET_ALL_RAISED_TICKETS, getAllRaisedTickets);
}
//************************************** */

//*********************** */

export function* addNewTicket({ payload }) {
  let { Category, Description, prop, authToken } = payload;
  try {
    const response = yield call(addNewTicketAsync, Category, Description, prop, authToken);
    console.log("add new tickets api res", response);
    if (response.data !== null && response.status) {
      yield put(addNewTicketSuccess(response.data));
    } else if (response.status === 500) {
      yield put(addNewTicketFailure(response));
    } else if (response !== null && response !== undefined) {
      yield put(addNewTicketFailure(response));
    } else {
      yield put(addNewTicketError());
    }
  } catch (error) {
    // catch throw
    yield put(addNewTicketError());
  }
}

const addNewTicketAsync = async (Category, Description, prop, authToken) => {
  return addNewTicketAPI(Category, Description, prop, authToken)
    .then((res) => res)
    .catch((err) => err);
};

export function* watchAddNewTicket() {
  yield takeEvery(ADD_NEW_TICKET, addNewTicket);
}
//************************************** */

//*********************** */

export function* getAllConversations({ payload }) {
  let { authToken, id } = payload;
  try {
    const response = yield call(getAllConversationsAsync, authToken, id);
    console.log("get all conversation api res", response);
    if (response.data !== null && response.status) {
      yield put(getAllConversationsSuccess(response.data));
    } else if (response !== null && response !== undefined) {
      yield put(getAllConversationsFailure(response));
    } else {
      yield put(getAllConversationsError());
    }
  } catch (error) {
    // catch throw
    yield put(getAllConversationsError());
  }
}

const getAllConversationsAsync = async (authToken, id) => {
  return getAllConversationsAPI(authToken, id)
    .then((res) => res)
    .catch((err) => err);
};

export function* watchGetAllConversations() {
  yield takeEvery(GET_ALL_CONVERSATIONS, getAllConversations);
}
//************************************** */

//*********************** */

export function* sendMessage({ payload }) {
  let { authToken, id, message } = payload;
  console.log('saga data', authToken, id, message)
  try {
    const response = yield call(sendMessageAsync, authToken, id, message);
    console.log("send message api res", response);
    if (response.data !== null && response.status) {
      yield put(sendMessageSuccess(response.data));
    } else if (response !== null && response !== undefined) {
      yield put(sendMessageFailure(response));
    } else {
      yield put(sendMessageError());
    }
  } catch (error) {
    // catch throw
    yield put(sendMessageError());
  }
}

const sendMessageAsync = async (authToken, id, message) => {
  return sendMessageAPI(authToken, id, message)
    .then((res) => res)
    .catch((err) => err);
};

export function* watchSendMessage() {
  yield takeEvery(SEND_MESSAGE, sendMessage);
}
//************************************** */


//*********************** */

export function* getContactDetails({ payload }) {
  let {} = payload;
  try {
    const response = yield call(getContactDetailsAsync);
    console.log("contact details api res", response);
    if (response !== null && response.status) {
      yield put(getContactDetailsSuccess(response));
    } else if (response !== null && response !== undefined) {
      yield put(getContactDetailsFailure(response));
    } else {
      yield put(getContactDetailsError());
    }
  } catch (error) {
    // catch throw
    yield put(getContactDetailsError());
  }
}

const getContactDetailsAsync = async () => {
  return getContactDetailsAPI()
    .then((res) => res)
    .catch((err) => err);
};

export function* watchGetContactDetails() {
  yield takeEvery(GET_CONTACT_DETAILS, getContactDetails);
}
//************************************** */


//*********************** */

export function* submitContactForm({ payload }) {
  let {name, email,contactNumber, query} = payload;
  try {
    const response = yield call(submitContactFormAsync,name, email,contactNumber, query);
    console.log("submit contact form api res", response);
    if (response.data !== null && response.status) {
      yield put(submitContactFormSuccess(response.data));
    } else if (response !== null && response !== undefined) {
      yield put(submitContactFormFailure(response));
    } else {
      yield put(submitContactFormError());
    }
  } catch (error) {
    // catch throw
    yield put(submitContactFormError());
  }
}

const submitContactFormAsync = async (name, email,contactNumber, query) => {
  return submitContactFormAPI(name, email,contactNumber, query)
    .then((res) => res)
    .catch((err) => err);
};

export function* watchSubmitContactForm() {
  yield takeEvery(SUBMIT_CONTACT_FORM, submitContactForm);
}
//************************************** */

//*********************** */

export function* getOwnerDocumentsURI({ payload }) {
  let {authToken,imageUri} = payload;
  try {
    const response = yield call(getOwnerDocumentsURIAsync,authToken,imageUri);
    console.log("get owner documents uri api res", response);
    if (response !== null && response.success) {
      yield put(getOwnerDocumentsURISuccess(response));
    } else if (response.status === 500) {
      yield put(getOwnerDocumentsURIFailure(response));
    } else if (response !== null && response !== undefined) {
      yield put(getOwnerDocumentsURIFailure(response));
    } else {
      yield put(getOwnerDocumentsURIError());
    }
  } catch (error) {
    // catch throw
    yield put(getOwnerDocumentsURIError());
  }
}

const getOwnerDocumentsURIAsync = async (authToken,imageUri) => {
  return getOwnerDocumentsURIAPI(authToken,imageUri)
    .then((res) => res)
    .catch((err) => err);
};

export function* watchGetOwnerDocumentsURI() {
  yield takeEvery(GET_OWNER_DOCUMENT_URI, getOwnerDocumentsURI);
}
//************************************** */



export default function* rootSaga() {
  yield all([fork(watchOwnerProfile),
  fork(watchUpdateOwnerProfile),
  fork(watchAddProfilePicture),
  fork(watchOwnerProperty),
  fork(watchPropertyNewslettersMilestone),
  fork(watchPropertyVideos),
  fork(watchOwnerPropertyDocuments),
  fork(watchTransactions),
  fork(watchNotification),
  fork(watchNewNotification),
  fork(watchGetAllRaisedTickets),
  fork(watchAddNewTicket),
  fork(watchGetAllConversations),
  fork(watchSendMessage),
  fork(watchGetContactDetails),
  fork(watchSubmitContactForm),
  fork(watchGetOwnerDocumentsURI),

  ]);
}
