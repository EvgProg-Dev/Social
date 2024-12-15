import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
    // profile: {
    //     id: 1,
    //     name: "Oliver Grant",
    //     address: "1234 Elm Street, Springfield, IL, USA",
    //     email: "oliver.grant@example.com",
    //     img: "https://www.dresscircle.co.uk/uploads/headshots/talent/headshot/1832/oliver-grant-33.jpg",
    //     imgProfile:
    //         "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?cs=srgb&dl=pexels-pixabay-290595.jpg&fm=jpg",
    //     phone: "+1 (555) 123-4567",
    //     position: "Software Engineer",
    //     bio: "Passionate developer with 5+ years of experience in web development, specializing in React and Node.js.",
    // },
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
    profile: null,
    status: "",
};

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: state.posts.length + 1,
                        name: "NEW POST NAME",
                        postText: action.payload,
                        date: "00.00.2000",
                        like: 0,
                        dislike: 0,
                        img: "https://www.dresscircle.co.uk/uploads/headshots/talent/headshot/1832/oliver-grant-33.jpg",
                    },
                ],
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.newPostText };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case SET_STATUS: {
            return { ...state, status: action.status };
        }

        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    payload: newPostText,
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
export const getUserProfile = (id) => async (dispatch) => {
    try {
        const response = await profileAPI.getProfile(id);

        dispatch(setUserProfile(response.data));
    } catch (error) {
        console.error("Error getUserProfile:", error);
    }
};

export const getStatus = (id) => async (dispatch) => {
    try {
        const response = await profileAPI.getStatus(id);
        dispatch(setStatus(response.data));
    } catch (error) {
        console.error("Error getStatus:", error);
    }
};

export const updateStatus = (status) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        console.error("Error updateStatus:", error);
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text,
    };
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status,
    };
};
