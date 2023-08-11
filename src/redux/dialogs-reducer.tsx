const SEND_MESSAGE = "SEND-MESSAGE";

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

let initialState = {
  messages: [
    { id: 1, message: "Hi! ^_^itosik" },
    { id: 2, message: "How are yoy?" },
    { id: 3, message: "YO" },
    { id: 4, message: "YO" },
    { id: 5, message: "YO" },
    { id: 6, message: "YO" },
  ] as Array<MessageType>,

  dialogs: [
    { id: 1, name: "Nikitosik" },
    { id: 2, name: "Dimon" },
    { id: 3, name: "Ira" },
    { id: 4, name: "Sergey" },
    { id: 5, name: "Alla" },
    { id: 6, name: "Lena" },
    { id: 7, name: "Ruslan" },
  ] as Array<DialogType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any):InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      let nextIdMessages = state.messages.length + 1;
      let newMessage = {
        id: nextIdMessages + body,
        message: body,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE,
  newMessageBody: string
}


export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
