import style from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

export const Profile = ({profile, status, updateStatus}) => {

    return (
        <section>
            <ProfileInfo
                profile={profile}
                status={status}
                updateStatus={updateStatus}
            />
            <div className={style.profile__wrappper}>
                <PostsContainer />
            </div>
        </section>
    );
};
