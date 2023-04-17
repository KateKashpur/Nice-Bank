const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Hi! ^_^itosik" },
    { id: 2, message: "How are yoy?" },
    { id: 3, message: "YO" },
    { id: 4, message: "YO" },
    { id: 5, message: "YO" },
    { id: 6, message: "YO" },
  ],

  dialogs: [
    { id: 1, name: "Nikitosik" },
    { id: 2, name: "Dimon" },
    { id: 3, name: "Ira" },
    { id: 4, name: "Sergey" },
    { id: 5, name: "Alla" },
    { id: 6, name: "Lena" },
    { id: 7, name: "Ruslan" },
  ],

  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };

    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [{ id: 7, message: body }, ...state.messages],
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
