import { connect } from "react-redux"
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/ProfileReducer"
import { Posts } from "./Posts"

const mapStateToProps = (state) => {
    return {
        data: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => dispatch(updateNewPostTextActionCreator(text)),
        onAddPost: () => dispatch(addPostActionCreator()),

    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts);

export default PostsContainer;