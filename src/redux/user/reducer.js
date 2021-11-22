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
    case OWNER_PROFILE:
      return { ...state, loading: true, ownerprofilestatus: "none" };
    case OWNER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        ownerprofilestatus: "success",
        data: action.payload,
      };
    case OWNER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        ownerprofilestatus: "failure",
        result: action.payload,
      };
    case OWNER_PROFILE_ERROR:
      return { ...state, loading: false, ownerprofilestatus: "error" };
    case OWNER_PROFILE_RESET:
      return {
        ...state,
        loading: false,
        ownerprofilestatus: "reset",
        result: "",
      };

    case UPDATE_OWNER_PROFILE:
      return { ...state, loading: true, updateownerprofilestatus: "none" };
    case UPDATE_OWNER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        updateownerprofilestatus: "success",
        data: action.payload,
      };
    case UPDATE_OWNER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        updateownerprofilestatus: "failure",
        result: action.payload,
      };
    case UPDATE_OWNER_PROFILE_ERROR:
      return { ...state, loading: false, updateownerprofilestatus: "error" };
    case UPDATE_OWNER_PROFILE_RESET:
      return {
        ...state,
        loading: false,
        updateownerprofilestatus: "reset",
        result: "",
      };

    case ADD_PROFILE_PICTURE:
      return { ...state, loading: true, addprofilepicturestatus: "none" };
    case ADD_PROFILE_PICTURE_SUCCESS:
      return {
        ...state,
        loading: false,
        addprofilepicturestatus: "success",
        data: action.payload,
      };
    case ADD_PROFILE_PICTURE_FAILURE:
      return {
        ...state,
        loading: false,
        addprofilepicturestatus: "failure",
        result: action.payload,
      };
    case ADD_PROFILE_PICTURE_ERROR:
      return { ...state, loading: false, addprofilepicturestatus: "error" };
    case ADD_PROFILE_PICTURE_RESET:
      return {
        ...state,
        loading: false,
        addprofilepicturestatus: "reset",
        result: "",
      };

    case OWNER_PROPERTY:
      return { ...state, loading: true, ownerpropertystatus: "none" };
    case OWNER_PROPERTY_SUCCESS:
      return {
        ...state,
        loading: false,
        ownerpropertystatus: "success",
        data: action.payload,
      };
    case OWNER_PROPERTY_FAILURE:
      return {
        ...state,
        loading: false,
        ownerpropertystatus: "failure",
        result: action.payload,
      };
    case OWNER_PROPERTY_ERROR:
      return { ...state, loading: false, ownerpropertystatus: "error" };
    case OWNER_PROPERTY_RESET:
      return {
        ...state,
        loading: false,
        ownerpropertystatus: "reset",
        result: "",
      };

    case PROPERTY_NEWSLETTERS_MILESTONE:
      return {
        ...state,
        loading: true,
        propertynewslettersmilestonestatus: "none",
      };
    case PROPERTY_NEWSLETTERS_MILESTONE_SUCCESS:
      return {
        ...state,
        loading: false,
        propertynewslettersmilestonestatus: "success",
        data: action.payload,
      };
    case PROPERTY_NEWSLETTERS_MILESTONE_FAILURE:
      return {
        ...state,
        loading: false,
        propertynewslettersmilestonestatus: "failure",
        result: action.payload,
      };
    case PROPERTY_NEWSLETTERS_MILESTONE_ERROR:
      return {
        ...state,
        loading: false,
        propertynewslettersmilestonestatus: "error",
      };
    case PROPERTY_NEWSLETTERS_MILESTONE_RESET:
      return {
        ...state,
        loading: false,
        propertynewslettersmilestonestatus: "reset",
        result: "",
      };

    case PROPERTY_VIDEOS:
      return { ...state, loading: true, propertyvideosstatus: "none" };
    case PROPERTY_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        propertyvideosstatus: "success",
        data: action.payload,
      };
    case PROPERTY_VIDEOS_FAILURE:
      return {
        ...state,
        loading: false,
        propertyvideosstatus: "failure",
        result: action.payload,
      };
    case PROPERTY_VIDEOS_ERROR:
      return { ...state, loading: false, propertyvideosstatus: "error" };
    case PROPERTY_VIDEOS_RESET:
      return {
        ...state,
        loading: false,
        propertyvideosstatus: "reset",
        result: "",
      };

    case OWNER_PROPERTY_DOCUMENTS:
      return { ...state, loading: true, ownerpropertydocumentsstatus: "none" };
    case OWNER_PROPERTY_DOCUMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        ownerpropertydocumentsstatus: "success",
        data: action.payload,
      };
    case OWNER_PROPERTY_DOCUMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        ownerpropertydocumentsstatus: "failure",
        result: action.payload,
      };
    case OWNER_PROPERTY_DOCUMENTS_ERROR:
      return {
        ...state,
        loading: false,
        ownerpropertydocumentsstatus: "error",
      };
    case OWNER_PROPERTY_DOCUMENTS_RESET:
      return {
        ...state,
        loading: false,
        ownerpropertydocumentsstatus: "reset",
        result: "",
      };

    case TRANSACTIONS:
      return { ...state, loading: true, transactionsstatus: "none" };
    case TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        transactionsstatus: "success",
        data: action.payload,
      };
    case TRANSACTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        transactionsstatus: "failure",
        result: action.payload,
      };
    case TRANSACTIONS_ERROR:
      return { ...state, loading: false, transactionsstatus: "error" };
    case TRANSACTIONS_RESET:
      return {
        ...state,
        loading: false,
        transactionsstatus: "reset",
        result: "",
      };

    case NOTIFICATION:
      return { ...state, loading: true, notificationstatus: "none" };
    case NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        notificationstatus: "success",
        data: action.payload,
      };
    case NOTIFICATION_FAILURE:
      return {
        ...state,
        loading: false,
        notificationstatus: "failure",
        result: action.payload,
      };
    case NOTIFICATION_ERROR:
      return { ...state, loading: false, notificationstatus: "error" };
    case NOTIFICATION_RESET:
      return {
        ...state,
        loading: false,
        notificationstatus: "reset",
        result: "",
      };

    case NEW_NOTIFICATION:
      return { ...state, loading: true, newnotificationstatus: "none" };
    case NEW_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        newnotificationstatus: "success",
        data: action.payload,
      };
    case NEW_NOTIFICATION_FAILURE:
      return {
        ...state,
        loading: false,
        newnotificationstatus: "failure",
        result: action.payload,
      };
    case NEW_NOTIFICATION_ERROR:
      return { ...state, loading: false, newnotificationstatus: "error" };
    case NEW_NOTIFICATION_RESET:
      return {
        ...state,
        loading: false,
        newnotificationstatus: "reset",
        result: "",
      };


    case GET_ALL_RAISED_TICKETS:
      return { ...state, loading: true, getallraisedticketsstatus: "none" };
    case GET_ALL_RAISED_TICKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        getallraisedticketsstatus: "success",
        data: action.payload,
      };
    case GET_ALL_RAISED_TICKETS_FAILURE:
      return {
        ...state,
        loading: false,
        getallraisedticketsstatus: "failure",
        result: action.payload,
      };
    case GET_ALL_RAISED_TICKETS_ERROR:
      return { ...state, loading: false, getallraisedticketsstatus: "error" };
    case GET_ALL_RAISED_TICKETS_RESET:
      return {
        ...state,
        loading: false,
        getallraisedticketsstatus: "reset",
        result: "",
      };

    case ADD_NEW_TICKET:
      return { ...state, loading: true, addnewticketstatus: "none" };
    case ADD_NEW_TICKET_SUCCESS:
      return {
        ...state,
        loading: false,
        addnewticketstatus: "success",
        data: action.payload,
      };
    case ADD_NEW_TICKET_FAILURE:
      return {
        ...state,
        loading: false,
        addnewticketstatus: "failure",
        result: action.payload,
      };
    case ADD_NEW_TICKET_ERROR:
      return { ...state, loading: false, addnewticketstatus: "error" };
    case ADD_NEW_TICKET_RESET:
      return {
        ...state,
        loading: false,
        addnewticketstatus: "reset",
        result: "",
      };

    case GET_ALL_CONVERSATIONS:
      return { ...state, loading: true, getallconversationstatus: "none" };
    case GET_ALL_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        getallconversationstatus: "success",
        data: action.payload,
      };
    case GET_ALL_CONVERSATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        getallconversationstatus: "failure",
        result: action.payload,
      };
    case GET_ALL_CONVERSATIONS_ERROR:
      return { ...state, loading: false, getallconversationstatus: "error" };
    case GET_ALL_CONVERSATIONS_RESET:
      return {
        ...state,
        loading: false,
        getallconversationstatus: "reset",
        result: "",
      };

    case SEND_MESSAGE:
      return { ...state, loading: true, sendmessagestatus: "none" };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        sendmessagestatus: "success",
        data: action.payload,
      };
    case SEND_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        sendmessagestatus: "failure",
        result: action.payload,
      };
    case SEND_MESSAGE_ERROR:
      return { ...state, loading: false, sendmessagestatus: "error" };
    case SEND_MESSAGE_RESET:
      return {
        ...state,
        loading: false,
        sendmessagestatus: "reset",
        result: "",
      };

      case  SUBMIT_CONTACT_FORM:
        return { ...state, loading: true, submitcontactformstatus: "none" };
      case  SUBMIT_CONTACT_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          submitcontactformstatus: "success",
          data: action.payload,
        };
      case  SUBMIT_CONTACT_FORM_FAILURE:
        return {
          ...state,
          loading: false,
          submitcontactformstatus: "failure",
          result: action.payload,
        };
      case  SUBMIT_CONTACT_FORM_ERROR:
        return { ...state, loading: false, submitcontactformstatus: "error" };
      case  SUBMIT_CONTACT_FORM_RESET:
        return {
          ...state,
          loading: false,
          submitcontactformstatus: "reset",
          result: "",
        };
        
        case GET_CONTACT_DETAILS:
        return { ...state, loading: true, getcontactdetailsstatus: "none" };
      case GET_CONTACT_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          getcontactdetailsstatus: "success",
          data: action.payload,
        };
      case GET_CONTACT_DETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          getcontactdetailsstatus: "failure",
          result: action.payload,
        };
      case GET_CONTACT_DETAILS_ERROR:
        return { ...state, loading: false, getcontactdetailsstatus: "error" };
      case GET_CONTACT_DETAILS_RESET:
        return {
          ...state,
          loading: false,
          getcontactdetailsstatus: "reset",
          result: "",
        };

   case GET_OWNER_DOCUMENT_URI:
      return { ...state, loading: true, getownerdocumenturistatus: "none" };
    case GET_OWNER_DOCUMENT_URI_SUCCESS:
      return {
        ...state,
        loading: false,
        getownerdocumenturistatus: "success",
        data: action.payload,
      };
    case GET_OWNER_DOCUMENT_URI_FAILURE:
      return {
        ...state,
        loading: false,
        getownerdocumenturistatus: "failure",
        result: action.payload,
      };
    case GET_OWNER_DOCUMENT_URI_ERROR:
      return { ...state, loading: false, getownerdocumenturistatus: "error" };
    case GET_OWNER_DOCUMENT_URI_RESET:
      return {
        ...state,
        loading: false,
        getownerdocumenturistatus: "reset",
        result: "",
      };
    

    default:
      return { ...state };
  }
};
