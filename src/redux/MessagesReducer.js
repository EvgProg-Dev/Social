const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
    messages: [
        {
            id: 1,
            name: "Oliver Grant",
            message: "Hello, how are you?",
            date: "10.10.2023",
        },
        {
            id: 2,
            name: "Sophia Bennett",
            message: "Let’s meet tomorrow.",
            date: "11.10.2023",
        },
        {
            id: 3,
            name: "Ethan Carter",
            message: "Just finished my project.",
            date: "12.10.2023",
        },
        {
            id: 4,
            name: "Lily Thompson",
            message: "Are you coming to the event?",
            date: "13.10.2023",
        },
        {
            id: 5,
            name: "Jackson Rivera",
            message: "Good morning!",
            date: "14.10.2023",
        },
        {
            id: 6,
            name: "Emily Collins",
            message: "Had a great day today.",
            date: "15.10.2023",
        },
        {
            id: 7,
            name: "Lucas Parker",
            message: "I will send you the documents.",
            date: "16.10.2023",
        },
        {
            id: 8,
            name: "Grace Morgan",
            message: "Can we reschedule?",
            date: "17.10.2023",
        },
        {
            id: 9,
            name: "Noah Bailey",
            message: "Looking forward to it!",
            date: "18.10.2023",
        },
        {
            id: 10,
            name: "Ava Simmons",
            message: "Let’s catch up soon!",
            date: "19.10.2023",
        },
    ],
    dialogs: [
        {
            id: 1,
            name: "Oliver Grant",
            img: "https://www.dresscircle.co.uk/uploads/headshots/talent/headshot/1832/oliver-grant-33.jpg",
        },
        {
            id: 2,
            name: "Sophia Bennett",
            img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Sophiemaude.jpg",
        },
        {
            id: 3,
            name: "Ethan Carter",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiFncwsV09zAWa8ghiaj1WV0GeFs7iiBukQ&s",
        },
        {
            id: 4,
            name: "Lily Thompson",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2A3HBiyJm8ZzoPXr0S_VSliZ-v53B_7xrg&s",
        },
        {
            id: 5,
            name: "Jackson Rivera",
            img: "https://usctrojans.com/images/2024/8/30/Jackson_Rivera.png",
        },
        {
            id: 6,
            name: "Emily Collins",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5UZDVIFQAZlDSBPLBSaSgOCkr8lKKF4GeQ&s",
        },
        {
            id: 7,
            name: "Lucas Parker",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpSyz5TvyFoyhiYtfKaeecBAyXIChOZBkaQ&s",
        },
        {
            id: 8,
            name: "Grace Morgan",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7A339o8_4sXhVkXXUnO9fnE6Gs-zSn84m6g&s",
        },
        {
            id: 9,
            name: "Noah Bailey",
            img: "https://images.squarespace-cdn.com/content/v1/61ba4b645461c81e9657f9b5/1643319455397-AYZORG3U5IO3CCWISUG2/NoahBaileyGroup_75904448_Noah.jpg?format=1000w",
        },
        {
            id: 10,
            name: "Ava Simmons",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUn4BN62qgnU7rAxJSoBy29ahkCoFc3htBQ&s",
        },
    ],
    newMessageText: "",
};

export const MessagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return { ...state, newMessageText: action.newMessageText };
        }

        case SEND_MESSAGE: {
            return {
                ...state, messages: [...state.messages, {
                        id: state.messages.length + 1,
                        name: "Oliver Grant",
                        message: action.payload,
                        date: "00.00.0000",
                }],
            };
        }

        default:
            return state;
    }
};

export const sendMessageActionCreator = (newMessageText) => ({ type: SEND_MESSAGE, payload: newMessageText });

export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text,
    };
};
