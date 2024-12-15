import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SAVE_FORM_DATA = "SAVE_FORM_DATA";

const initalState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    loginData: null,
    isFetching: false,
};

export const AuthReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case SAVE_FORM_DATA:
            return {
                ...state,
                loginData: action.payload,
            };

        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: { id, email, login, isAuth },
});

export const saveFormData = (loginData) => ({
    type: SAVE_FORM_DATA,
    payload: loginData,
});

export const getAuthUserData = () => async (dispatch) => {
    try {
        const response = await authAPI.me();
        if (response.data.resultCode === 0) {
            const { login, id, email } = response.data.data;

            dispatch(setAuthUserData(id, email, login, true));
        }
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

export const login = (email, password, remember) => async (dispatch) => {
    try {
        const response = await authAPI.login(email, password, remember, true);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            alert(response.data.messages);
        }
    } catch (error) {
        console.error("Error login user:", error);
    }
};
export const loguout = () => async (dispatch) => {
    try {
        const response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    } catch (error) {
        console.error("Error logout user:", error);
    }
};
