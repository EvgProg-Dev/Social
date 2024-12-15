import { Spinner } from "../../common/Spinner";
import style from "./ProfileInfo.module.css";
import { ProfileStatusHooks } from "./ProfileStatusHooks";

export const ProfileInfo = ({ profile, status, updateStatus }) => {

    const defaultImg =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

    if (!profile) {
        return <Spinner />;
    }

    return (
        <>
            <img
                className={style.img}
                src={
                    "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?cs=srgb&dl=pexels-pixabay-290595.jpg&fm=jpg"
                }
                alt="Profile background"
            />
            <div className={style.profile}>
                <h2 className={style.profile__info_title}>Profile:</h2>
                <div className={style.profile__info_wrapper}>
                    {profile.photos?.large ? (
                        <img
                            className={style.profile__info_img}
                            src={profile.photos.large}
                            alt={`Avatar of ${profile.fullName}`}
                        />
                    ) : (
                        <img
                            className={style.profile__info_img}
                            src={defaultImg}
                            alt="Default Avatar"
                        />
                    )}

                    <div className={style.profile__info}>
                        <h3>{profile.fullName || "Unknown User"}</h3>
                        <ProfileStatusHooks
                            status={status}
                            updateStatus={updateStatus}
                        />
                        <p>
                            Looking for a job:{" "}
                            {profile.lookingForAJob ? "Yes" : "No"}
                        </p>
                        {profile.lookingForAJobDescription && (
                            <p>{lookingForAJobDescription}</p>
                        )}
                        <h2>Contacts:</h2>
                        <a
                            href={profile.contacts?.facebook || "#"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
