import {
  LOGIN_USER,
  VERIFY_OTP,
  API,
  OWNER_PROFILE,
  ADD_PROFILE_PICTURE,
  GET_OWNER_PROPERTIES,
  PROPERTY_NEWSLETTERS_MILESTONE,
  PROPERTY_VIDEO,
  PROPERTY_DOCUMENT,
  PAYMENTS,
  NOTIFICATION,
  NEW_NOTIFICATION,
  GET_ALL_RAISED_TICKETS,
  ADD_NEW_TICKET,
  GET_ALL_CONVERSATIONS,
  SEND_MESSAGE,
  GET_CONTACT_DETAILS,
  SUBMIT_CONTACT_FORM,
  ADD_FIREBASE_TOKEN_IN_DATABASE,
  GET_OWNER_DOCUMENT_URI
} from "./apiconstants";

import Api from ".";
import { Platform } from "react-native";

export function loginUserAPI(CompanySlug, PhoneNumber, CountryCode) {
  var url = API + LOGIN_USER;
  var data = {
    CompanySlug: CompanySlug,
    PhoneNumber: PhoneNumber,
    CountryCode: CountryCode,
  };

  var headers = {
    "Content-Type": "application/json",
  };
  console.log("api calling", url, data, headers);
  return Api(url, null, "POST", data, headers);
}

export function verifyOTPAPI(CompanySlug, PhoneNumber, CountryCode, otp) {
  var url = API + VERIFY_OTP;
  var data = {
    CompanySlug: CompanySlug,
    PhoneNumber: PhoneNumber,
    CountryCode: CountryCode,
    otp: otp,
  };

  var headers = {
    "Content-Type": "application/json",
  };

  return Api(url, null, "POST", data, headers);
}

export function ownerProfileAPI(authToken) {
  var url = API + OWNER_PROFILE;

  var headers = {
    Authorization: authToken,
  };
  console.log("owner api calling user", url, headers);
  return Api(url, null, "GET", null, headers);
}

export function updateOwnerProfileAPI(
  fullName,
  Address,
  CorrespondingAddress,
  authToken
) {
  var url = API + OWNER_PROFILE;
  var data = {};
  if (fullName !== "") {
    data.fullName = fullName;
  }
  if (Address !== "") {
    data.Address = Address;
  }
  if (CorrespondingAddress !== "") {
    data.CorrespondingAddress = CorrespondingAddress;
  }

  var headers = {
    "Content-Type": "application/json",
    Authorization: authToken,
  };
  console.log('update owner profile api data', url, null, "POST", data, headers)
  return Api(url, null, "POST", data, headers);
}

export function addProfilePictureAPI(authToken, profilePicUrl) {
  var url = API + ADD_PROFILE_PICTURE;

  let tempimagepth = Platform.OS === 'android'
    ? profilePicUrl.uri
    : profilePicUrl.uri.replace('file://', '');

  var data = new FormData();
  data.append("ProfilePicture", {
    type: 'image/jpeg',
    uri: tempimagepth,
    name: 'profilePicUrl.jpg',
  });

  var headers = {
    "Content-Type": "multipart/form-data",
    Authorization: authToken,
  };
  console.log("api calling", url, data, headers);
  return Api(url, null, "PUT", data, headers);
}

export function ownerPropertyAPI(authToken) {
  var url = API + GET_OWNER_PROPERTIES;

  var headers = {
    Authorization: authToken,
  };
  console.log("api calling", url, headers);
  return Api(url, null, "GET", null, headers);
}

export function propertyNewslettersMilestoneAPI(authToken, propertyId) {
  var url = API + PROPERTY_NEWSLETTERS_MILESTONE + propertyId;

  var headers = {
    Authorization: authToken,
  };
  console.log("PROPERTY_NEWSLETTERS_MILESTONE api calling", url, headers);
  return Api(url, null, "GET", null, headers);
}

export function propertyVideosAPI(authToken, propertyId) {
  var url = API + PROPERTY_VIDEO + "/" + propertyId;

  var headers = {
    Authorization: authToken,
  };
  console.log("api calling", url, headers);
  return Api(url, null, "GET", null, headers);
}

export function ownerPropertyDocumentsAPI(authToken, id) {
  var url = API + PROPERTY_DOCUMENT + id;

  var headers = {
    Authorization: authToken,
  };
  console.log("api calling", url, headers);
  return Api(url, null, "GET", null, headers);
}

export function transactionsAPI(authToken, id) {
  var url = API + PAYMENTS + "/" + id;

  var headers = {
    Authorization: authToken,
  };
  console.log("api calling", url, headers);
  return Api(url, null, "GET", null, headers);
}

export function notificationAPI(authToken) {
  var url = API + NOTIFICATION;

  var params = {
    CommType: 'Portal'
  }

  var headers = {
    Authorization: authToken,
  };
  console.log("notification api calling ", url, params, "GET", null, headers);
  return Api(url, params, "GET", null, headers);
}

export function newNotificationAPI(authToken) {
  var url = API + NEW_NOTIFICATION;

  var params = {
    CommType: 'Portal'
  }

  var headers = {
    Authorization: authToken,
  };
  console.log("new notification api calling ", url, params, "GET", null, headers);
  return Api(url, params, "GET", null, headers);
}

export function getAllRaisedTicketsAPI(authToken) {
  var url = API + GET_ALL_RAISED_TICKETS;

  var params = {
    pagination: 1000,
    page: 1
  }

  var headers = {
    Authorization: authToken,
  };
  console.log("get all ticket raised  api calling ", url, params, "GET", null, headers);
  return Api(url, params, "GET", null, headers);
}


export function addNewTicketAPI(Category, Description, prop, authToken) {
  var url = API + ADD_NEW_TICKET;
  var data = {
    Category: Category,
    Description: Description,
    prop: prop,
  };

  var headers = {
    "Content-Type": "application/json",
    Authorization: authToken,
  };
  console.log("raise new ticket api calling ", url, null, "POST", data, headers);
  return Api(url, null, "POST", data, headers);
}

export function getAllConversationsAPI(authToken, id) {
  var url = API + GET_ALL_CONVERSATIONS + id;

  var headers = {
    Authorization: authToken,
  };

  console.log("api calling", url, headers);
  return Api(url, null, "GET", null, headers);
}

export function sendMessageAPI(authToken, id, message) {
  var url = API + SEND_MESSAGE + id;

  var data = new FormData();
  data.append("message", message)

  var headers = {
    Authorization: authToken,
  };

  console.log("api calling", url, data, headers);
  return Api(url, null, "PUT", data, headers);
}

export function getContactDetailsAPI() {
  var url = API + GET_CONTACT_DETAILS;

  console.log("get contact details api calling ", url, null, "GET", null, null);
  return Api(url, null, "GET", null, null);
}

export function submitContactFormAPI(name, email,contactNumber, query) {
  var url = API + SUBMIT_CONTACT_FORM;
  var data = {
    name:name,
    email: email,
    contactNumber:contactNumber,
    query:query,
  };
  console.log("submit contact form api calling ", url, null, "POST", data, null);
  return Api(url, null, "POST",data,null);
}

export function addFirebaseTokenAPI(deviceId,authToken) {
  var url = API + ADD_FIREBASE_TOKEN_IN_DATABASE;
  var data = {
    deviceId:deviceId
  };
  var headers = {
    Authorization: authToken,
  };
  console.log("add firebase token api calling ", url, null, "POST", data, headers);
  return Api(url, null, "POST",data,headers);
}


export function getOwnerDocumentsURIAPI(authToken,imageUri) {
  var url = API + GET_OWNER_DOCUMENT_URI;

  var params = {
   fileName : imageUri
  }
  var headers = {
    Authorization: authToken,
  };
  console.log("get owner documents uri api calling ", url, params, "GET", null, headers);
  return Api(url, params, "GET", null, headers);
}