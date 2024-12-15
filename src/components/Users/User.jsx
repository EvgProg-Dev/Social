import { NavLink } from "react-router-dom";
import style from "./Users.module.css";
import defaultProfileImg from "./../../assets/img/default-profile.webp";

export const User = ({ user, unfollow, follow, followingInProgress }) => {
    return (
        <div className={style.users}>
            <div className={style.users__left}>
                <NavLink to={`/profile/${user.id}`}>
                    <img
                        src={user.photos?.small || defaultProfileImg}
                        alt={user.name}
                    />
                </NavLink>
                {user.followed ? (
                    <button
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        onClick={() => unfollow(user.id)}
                    >
                        Unfollow
                    </button>
                ) : (
                    <button
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        onClick={() => follow(user.id)}
                    >
                        Follow
                    </button>
                )}
            </div>
            <div className={style.users__right}>
                <h3>
                    {user.name}
                    <br />
                    (id: {user.id})
                </h3>
                <h4>
                    Country: {user.location?.country || "-"}
                    <br />
                    City: {user.location?.city || "-"}
                </h4>
                <p>Status: {user.status || "-"}</p>
            </div>
        </div>
    );
};
