import { applyMiddleware, combineReducers, createStore } from "redux";
import { ProfileReducer } from "./ProfileReducer";
import { MessagesReducer } from "./MessagesReducer";
import { UsersReducer } from "./UsersReducer";
import { AuthReducer } from "./AuthReducer";
import { thunk } from "redux-thunk";
import { compose } from "redux";



const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
