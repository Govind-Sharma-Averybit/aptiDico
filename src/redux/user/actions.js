import {
  OWNER_PROFILE,
  OWNER_PROFILE_SUCCESS,
  OWNER_PROFILE_FAILURE,
  OWNER_PROFILE_ERROR,
  OWNER_PROFILE_RESET,

  UPDATE_OWNER_PROFILE,
  UPDATE_OWNER_PROFILE_SUCCESS,
  UPDATE_OWNER_PROFILE_FAILURE,
  UPDATE_OWNER_PROFILE_ERROR,
  UPDATE_OWNER_PROFILE_RESET,

  ADD_PROFILE_PICTURE,
  ADD_PROFILE_PICTURE_SUCCESS,
  ADD_PROFILE_PICTURE_FAILURE,
  ADD_PROFILE_PICTURE_ERROR,
  ADD_PROFILE_PICTURE_RESET,

  OWNER_PROPERTY,
  OWNER_PROPERTY_SUCCESS,
  OWNER_PROPERTY_FAILURE,
  OWNER_PROPERTY_ERROR,
  OWNER_PROPERTY_RESET,

  PROPERTY_NEWSLETTERS_MILESTONE,
  PROPERTY_NEWSLETTERS_MILESTONE_SUCCESS,
  PROPERTY_NEWSLETTERS_MILESTONE_FAILURE,
  PROPERTY_NEWSLETTERS_MILESTONE_ERROR,
  PROPERTY_NEWSLETTERS_MILESTONE_RESET,

  PROPERTY_VIDEOS,
  PROPERTY_VIDEOS_SUCCESS,
  PROPERTY_VIDEOS_FAILURE,
  PROPERTY_VIDEOS_ERROR,
  PROPERTY_VIDEOS_RESET,

  OWNER_PROPERTY_DOCUMENTS,
  OWNER_PROPERTY_DOCUMENTS_SUCCESS,
  OWNER_PROPERTY_DOCUMENTS_FAILURE,
  OWNER_PROPERTY_DOCUMENTS_ERROR,
  OWNER_PROPERTY_DOCUMENTS_RESET,

  TRANSACTIONS,
  TRANSACTIONS_SUCCESS,
  TRANSACTIONS_FAILURE,
  TRANSACTIONS_ERROR,
  TRANSACTIONS_RESET,

  NOTIFICATION,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_FAILURE,
  NOTIFICATION_ERROR,
  NOTIFICATION_RESET,

  NEW_NOTIFICATION,
  NEW_NOTIFICATION_SUCCESS,
  NEW_NOTIFICATION_FAILURE,
  NEW_NOTIFICATION_ERROR,
  NEW_NOTIFICATION_RESET,

  GET_ALL_RAISED_TICKETS,
  GET_ALL_RAISED_TICKETS_SUCCESS,
  GET_ALL_RAISED_TICKETS_FAILURE,
  GET_ALL_RAISED_TICKETS_ERROR,
  GET_ALL_RAISED_TICKETS_RESET,


  ADD_NEW_TICKET,
  ADD_NEW_TICKET_SUCCESS,
  ADD_NEW_TICKET_FAILURE,
  ADD_NEW_TICKET_ERROR,
  ADD_NEW_TICKET_RESET,

  GET_ALL_CONVERSATIONS,
  GET_ALL_CONVERSATIONS_SUCCESS,
  GET_ALL_CONVERSATIONS_FAILURE,
  GET_ALL_CONVERSATIONS_ERROR,
  GET_ALL_CONVERSATIONS_RESET,

  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_ERROR,
  SEND_MESSAGE_RESET,

  GET_CONTACT_DETAILS,
  GET_CONTACT_DETAILS_SUCCESS,
  GET_CONTACT_DETAILS_FAILURE,
  GET_CONTACT_DETAILS_ERROR,
  GET_CONTACT_DETAILS_RESET,

  SUBMIT_CONTACT_FORM,
  SUBMIT_CONTACT_FORM_SUCCESS,
  SUBMIT_CONTACT_FORM_FAILURE,
  SUBMIT_CONTACT_FORM_ERROR,
  SUBMIT_CONTACT_FORM_RESET,

  GET_OWNER_DOCUMENT_URI,
  GET_OWNER_DOCUMENT_URI_SUCCESS,
  GET_OWNER_DOCUMENT_URI_FAILURE,
  GET_OWNER_DOCUMENT_URI_ERROR,
  GET_OWNER_DOCUMENT_URI_RESET,
} from "../../utilities/Constants/actionTypes";

export const ownerProfile = (authToken) => ({
  type: OWNER_PROFILE,
  payload: { authToken },
});
export const ownerProfileSuccess = (data) => ({
  type: OWNER_PROFILE_SUCCESS,
  payload: data,
});
export const ownerProfileFailure = (error) => ({
  type: OWNER_PROFILE_FAILURE,
  payload: error,
});
export const ownerProfileError = () => ({
  type: OWNER_PROFILE_ERROR,
  payload: null,
});
export const ownerProfileReset = () => ({
  type: OWNER_PROFILE_RESET,
  payload: null,
});


export const updateOwnerProfile = (fullName, Address, CorrespondingAddress, authToken) => ({
  type: UPDATE_OWNER_PROFILE,
  payload: { fullName, Address, CorrespondingAddress, authToken },
});
export const updateOwnerProfileSuccess = (data) => ({
  type: UPDATE_OWNER_PROFILE_SUCCESS,
  payload: data,
});
export const updateOwnerProfileFailure = (error) => ({
  type: UPDATE_OWNER_PROFILE_FAILURE,
  payload: error,
});
export const updateOwnerProfileError = () => ({
  type: UPDATE_OWNER_PROFILE_ERROR,
  payload: null,
});
export const updateOwnerProfileReset = () => ({
  type: UPDATE_OWNER_PROFILE_RESET,
  payload: null,
});


export const addProfilePicture = (authToken, profilePicUrl) => ({
  type: ADD_PROFILE_PICTURE,
  payload: { authToken, profilePicUrl },
});
export const addProfilePictureSuccess = (data) => ({
  type: ADD_PROFILE_PICTURE_SUCCESS,
  payload: data,
});
export const addProfilePictureFailure = (error) => ({
  type: ADD_PROFILE_PICTURE_FAILURE,
  payload: error,
});
export const addProfilePictureError = () => ({
  type: ADD_PROFILE_PICTURE_ERROR,
  payload: null,
});
export const addProfilePictureReset = () => ({
  type: ADD_PROFILE_PICTURE_RESET,
  payload: null,
});


export const ownerProperty = (authToken) => ({
  type: OWNER_PROPERTY,
  payload: { authToken },
});
export const ownerPropertySuccess = (data) => ({
  type: OWNER_PROPERTY_SUCCESS,
  payload: data,
});
export const ownerPropertyFailure = (error) => ({
  type: OWNER_PROPERTY_FAILURE,
  payload: error,
});
export const ownerPropertyError = () => ({
  type: OWNER_PROPERTY_ERROR,
  payload: null,
});
export const ownerPropertyReset = () => ({
  type: OWNER_PROPERTY_RESET,
  payload: null,
});


export const propertyNewslettersMilestone = (authToken, propertyId) =>
({
  type: PROPERTY_NEWSLETTERS_MILESTONE,
  payload: {
    authToken,
    propertyId,
  },
});
export const propertyNewslettersMilestoneSuccess = (data) => ({
  type: PROPERTY_NEWSLETTERS_MILESTONE_SUCCESS,
  payload: data,
});
export const propertyNewslettersMilestoneFailure = (error) => ({
  type: PROPERTY_NEWSLETTERS_MILESTONE_FAILURE,
  payload: error,
});
export const propertyNewslettersMilestoneError = () => ({
  type: PROPERTY_NEWSLETTERS_MILESTONE_ERROR,
  payload: null,
});
export const propertyNewslettersMilestoneReset = () => ({
  type: PROPERTY_NEWSLETTERS_MILESTONE_RESET,
  payload: null,
});


export const propertyVideos = (authToken, propertyId) => ({
  type: PROPERTY_VIDEOS,
  payload: { authToken, propertyId },
});
export const propertyVideosSuccess = (data) => ({
  type: PROPERTY_VIDEOS_SUCCESS,
  payload: data,
});
export const propertyVideosFailure = (error) => ({
  type: PROPERTY_VIDEOS_FAILURE,
  payload: error,
});
export const propertyVideosError = () => ({
  type: PROPERTY_VIDEOS_ERROR,
  payload: null,
});
export const propertyVideosReset = () => ({
  type: PROPERTY_VIDEOS_RESET,
  payload: null,
});


export const ownerPropertyDocuments = (authToken, id) => ({
  type: OWNER_PROPERTY_DOCUMENTS,
  payload: { authToken, id },
});
export const ownerPropertyDocumentsSuccess = (data) => ({
  type: OWNER_PROPERTY_DOCUMENTS_SUCCESS,
  payload: data,
});
export const ownerPropertyDocumentsFailure = (error) => ({
  type: OWNER_PROPERTY_DOCUMENTS_FAILURE,
  payload: error,
});
export const ownerPropertyDocumentsError = () => ({
  type: OWNER_PROPERTY_DOCUMENTS_ERROR,
  payload: null,
});
export const ownerPropertyDocumentsReset = () => ({
  type: OWNER_PROPERTY_DOCUMENTS_RESET,
  payload: null,
});


export const transactions = (authToken, id) => ({
  type: TRANSACTIONS,
  payload: { authToken, id },
});
export const transactionsSuccess = (data) => ({
  type: TRANSACTIONS_SUCCESS,
  payload: data,
});
export const transactionsFailure = (error) => ({
  type: TRANSACTIONS_FAILURE,
  payload: error,
});
export const transactionsError = () => ({
  type: TRANSACTIONS_ERROR,
  payload: null,
});
export const transactionsReset = () => ({
  type: TRANSACTIONS_RESET,
  payload: null,
});

export const notification = (authToken) => ({
  type: NOTIFICATION,
  payload: { authToken },
});
export const notificationSuccess = (data) => ({
  type: NOTIFICATION_SUCCESS,
  payload: data,
});
export const notificationFailure = (error) => ({
  type: NOTIFICATION_FAILURE,
  payload: error,
});
export const notificationError = () => ({
  type: NOTIFICATION_ERROR,
  payload: null,
});
export const notificationReset = () => ({
  type: NOTIFICATION_RESET,
  payload: null,
});


export const newNotification = (authToken) => ({
  type: NEW_NOTIFICATION,
  payload: { authToken },
});
export const newNotificationSuccess = (data) => ({
  type: NEW_NOTIFICATION_SUCCESS,
  payload: data,
});
export const newNotificationFailure = (error) => ({
  type: NEW_NOTIFICATION_FAILURE,
  payload: error,
});
export const newNotificationError = () => ({
  type: NEW_NOTIFICATION_ERROR,
  payload: null,
});
export const newNotificationReset = () => ({
  type: NEW_NOTIFICATION_RESET,
  payload: null,
});

export const getAllRaisedTickets = (authToken) => ({
  type: GET_ALL_RAISED_TICKETS,
  payload: { authToken },
});
export const getAllRaisedTicketsSuccess = (data) => ({
  type: GET_ALL_RAISED_TICKETS_SUCCESS,
  payload: data,
});
export const getAllRaisedTicketsFailure = (error) => ({
  type: GET_ALL_RAISED_TICKETS_FAILURE,
  payload: error,
});
export const getAllRaisedTicketsError = () => ({
  type: GET_ALL_RAISED_TICKETS_ERROR,
  payload: null,
});
export const getAllRaisedTicketsReset = () => ({
  type: GET_ALL_RAISED_TICKETS_RESET,
  payload: null,
});


export const addNewTicket = (Category, Description, prop, authToken) => ({
  type: ADD_NEW_TICKET,
  payload: { Category, Description, prop, authToken },
});
export const addNewTicketSuccess = (data) => ({
  type: ADD_NEW_TICKET_SUCCESS,
  payload: data,
});
export const addNewTicketFailure = (error) => ({
  type: ADD_NEW_TICKET_FAILURE,
  payload: error,
});
export const addNewTicketError = () => ({
  type: ADD_NEW_TICKET_ERROR,
  payload: null,
});
export const addNewTicketReset = () => ({
  type: ADD_NEW_TICKET_RESET,
  payload: null,
});

export const getAllConversations = (authToken, id) => ({
  type: GET_ALL_CONVERSATIONS,
  payload: { authToken, id },
});
export const getAllConversationsSuccess = (data) => ({
  type: GET_ALL_CONVERSATIONS_SUCCESS,
  payload: data,
});
export const getAllConversationsFailure = (error) => ({
  type: GET_ALL_CONVERSATIONS_FAILURE,
  payload: error,
});
export const getAllConversationsError = () => ({
  type: GET_ALL_CONVERSATIONS_ERROR,
  payload: null,
});
export const getAllConversationsReset = () => ({
  type: GET_ALL_CONVERSATIONS_RESET,
  payload: null,
});

export const sendMessage = (authToken, id, message) => ({
  type: SEND_MESSAGE,
  payload: { authToken, id, message },
});
export const sendMessageSuccess = (data) => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: data,
});
export const sendMessageFailure = (error) => ({
  type: SEND_MESSAGE_FAILURE,
  payload: error,
});
export const sendMessageError = () => ({
  type: SEND_MESSAGE_ERROR,
  payload: null,
});
export const sendMessageReset = () => ({
  type: SEND_MESSAGE_RESET,
  payload: null,
});


export const getContactDetails = () => ({
  type: GET_CONTACT_DETAILS,
  payload: {},
});
export const getContactDetailsSuccess = (data) => ({
  type: GET_CONTACT_DETAILS_SUCCESS,
  payload: data,
});
export const getContactDetailsFailure = (error) => ({
  type: GET_CONTACT_DETAILS_FAILURE,
  payload: error,
});
export const getContactDetailsError = () => ({
  type: GET_CONTACT_DETAILS_ERROR,
  payload: null,
});
export const getContactDetailsReset = () => ({
  type: GET_CONTACT_DETAILS_RESET,
  payload: null,
});

export const submitContactForm = (name, email,contactNumber, query) => ({
  type: SUBMIT_CONTACT_FORM,
  payload: {name, email,contactNumber, query},
});
export const submitContactFormSuccess = (data) => ({
  type: SUBMIT_CONTACT_FORM_SUCCESS,
  payload: data,
});
export const submitContactFormFailure = (error) => ({
  type: SUBMIT_CONTACT_FORM_FAILURE,
  payload: error,
});
export const submitContactFormError = () => ({
  type: SUBMIT_CONTACT_FORM_ERROR,
  payload: null,
});
export const submitContactFormReset = () => ({
  type: SUBMIT_CONTACT_FORM_RESET,
  payload: null,
});

export const getOwnerDocumentsURI = (authToken,imageUri) => ({
  type: GET_OWNER_DOCUMENT_URI,
  payload: {authToken,imageUri},
});
export const getOwnerDocumentsURISuccess = (data) => ({
  type: GET_OWNER_DOCUMENT_URI_SUCCESS,
  payload: data,
});
export const getOwnerDocumentsURIFailure = (error) => ({
  type: GET_OWNER_DOCUMENT_URI_FAILURE,
  payload: error,
});
export const getOwnerDocumentsURIError = () => ({
  type: GET_OWNER_DOCUMENT_URI_ERROR,
  payload: null,
});
export const getOwnerDocumentsURIReset = () => ({
  type: GET_OWNER_DOCUMENT_URI_RESET,
  payload: null,
});
