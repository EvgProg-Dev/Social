import { MessagesReducer } from "./MessagesReduces";
import { ProfileReducer } from "./ProfileReducer";
import { SideBarReducer } from "./SideBarReducer";

export const store = {
    _data: {
        profilePage: {
            profile: {
                id: 1,
                name: "Oliver Grant",
                address: "1234 Elm Street, Springfield, IL, USA",
                email: "oliver.grant@example.com",
                img: "https://www.dresscircle.co.uk/uploads/headshots/talent/headshot/1832/oliver-grant-33.jpg",
                imgProfile:
                    "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?cs=srgb&dl=pexels-pixabay-290595.jpg&fm=jpg",
                phone: "+1 (555) 123-4567",
                position: "Software Engineer",
                bio: "Passionate developer with 5+ years of experience in web development, specializing in React and Node.js.",
            },
            posts: [
                {
                    id: 1,
                    name: "Oliver Grant",
                    postText: "Loving the new updates!",
                    date: "10.10.2023",
                    like: 10,
                    dislike: 0,
                    img: "https://www.dresscircle.co.uk/uploads/headshots/talent/headshot/1832/oliver-grant-33.jpg",
                },
                {
                    id: 2,
                    name: "Sophia Bennett",
                    postText: "Had a productive day!",
                    date: "11.10.2023",
                    like: 8,
                    dislike: 1,
                    img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Sophiemaude.jpg",
                },
                {
                    id: 3,
                    name: "Ethan Carter",
                    postText: "Exploring new coding techniques.",
                    date: "12.10.2023",
                    like: 15,
                    dislike: 2,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiFncwsV09zAWa8ghiaj1WV0GeFs7iiBukQ&s",
                },
                {
                    id: 4,
                    name: "Lily Thompson",
                    postText: "Enjoyed a long walk today.",
                    date: "13.10.2023",
                    like: 7,
                    dislike: 0,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2A3HBiyJm8ZzoPXr0S_VSliZ-v53B_7xrg&s",
                },
                {
                    id: 5,
                    name: "Jackson Rivera",
                    postText: "Learning something new every day.",
                    date: "14.10.2023",
                    like: 12,
                    dislike: 1,
                    img: "https://usctrojans.com/images/2024/8/30/Jackson_Rivera.png",
                },
                {
                    id: 6,
                    name: "Emily Collins",
                    postText: "Grateful for my friends and family.",
                    date: "15.10.2023",
                    like: 20,
                    dislike: 0,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5UZDVIFQAZlDSBPLBSaSgOCkr8lKKF4GeQ&s",
                },
                {
                    id: 7,
                    name: "Lucas Parker",
                    postText: "Working on an exciting project!",
                    date: "16.10.2023",
                    like: 17,
                    dislike: 3,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpSyz5TvyFoyhiYtfKaeecBAyXIChOZBkaQ&s",
                },
                {
                    id: 8,
                    name: "Grace Morgan",
                    postText: "Just completed a major milestone!",
                    date: "17.10.2023",
                    like: 14,
                    dislike: 2,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7A339o8_4sXhVkXXUnO9fnE6Gs-zSn84m6g&s",
                },
                {
                    id: 9,
                    name: "Noah Bailey",
                    postText: "Feeling motivated and focused.",
                    date: "18.10.2023",
                    like: 9,
                    dislike: 1,
                    img: "https://images.squarespace-cdn.com/content/v1/61ba4b645461c81e9657f9b5/1643319455397-AYZORG3U5IO3CCWISUG2/NoahBaileyGroup_75904448_Noah.jpg?format=1000w",
                },
                {
                    id: 10,
                    name: "Ava Simmons",
                    postText: "Looking forward to the weekend!",
                    date: "19.10.2023",
                    like: 13,
                    dislike: 0,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUn4BN62qgnU7rAxJSoBy29ahkCoFc3htBQ&s",
                },
            ],
            newPostText: "",
        },

        messagesPage: {
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
        },
        sideBar: {},
    },

    _callSubscriber() {
        console.log("state was changed");
    },

    getData() {
        return this._data;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._data.profilePage = ProfileReducer(this._data.profilePage, action);
        this._data.messagesPage = MessagesReducer(this._data.messagesPage, action);
        this._data.sideBar = SideBarReducer(this._data.sideBar, action);

        this._callSubscriber(this._data);

    //     if (action.type === ADD_POST) {
    //         this._data.profilePage.posts.push({
    //             id: 11,
    //             name: "NEW POST NAME",
    //             postText: this._data.profilePage.newPostText,
    //             date: "00.00.2000",
    //             like: 0,
    //             dislike: 0,
    //             img: "https://www.dresscircle.co.uk/uploads/headshots/talent/headshot/1832/oliver-grant-33.jpg",
    //         });
    //         this._data.profilePage.newPostText = "";
    //         this._callSubscriber(this._data);
    //     } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //         this._data.profilePage.newPostText = action.newPost;
    //         this._callSubscriber(this._data);
    //     } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //         this._data.messagesPage.newMessageText = action.newMessage;
    //         this._callSubscriber(this._data);
    //     } else if (action.type === SEND_MESSAGE) {
    //         this._data.messagesPage.messages.push({
    //             id: 11,
    //             name: "Oliver Grant",
    //             message: this._data.messagesPage.newMessageText,
    //             date: "10.10.2023",
    //         });
    //         this._data.messagesPage.newMessageText = "";

    //         this._callSubscriber(this._data);
    //     }
    },
};


