import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";
import {
    sendMessageActionCreator,
    updateNewMessageActionCreator,
} from "../../redux/MessagesReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
    return {
        data: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText || "",
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        onNewMessageChange: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        },
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
