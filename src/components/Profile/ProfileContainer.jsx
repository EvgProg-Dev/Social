import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
    getStatus,
    getUserProfile,
    updateStatus,
} from "../../redux/ProfileReducer";
import { Spinner } from "../common/Spinner";
import { withRouter } from "../../hoc/withRouter";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const { params } = this.props.router;
        const userId = params.userId || this.props.myId;

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        if (!this.props.profile) {
            return <Spinner />;
        }
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.auth.id,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
