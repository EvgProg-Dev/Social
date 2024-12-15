import style from "./Users.module.css";
import { Pagination } from "../common/Spinner/Pagination";
import { User } from "./User";

export const Users = ({
    totalUsersCount,
    pageSize,
    users,
    followingInProgress,
    unfollow,
    follow,
    currentPage,
    onPageChanged,
}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <>
            <h2 className={style.users__title}>Users:</h2>

            <div className={style.users__wrapper}>
                {users.map((user) => (
                    <User
                        key={user.id}
                        user={user}
                        unfollow={unfollow}
                        follow={follow}
                        followingInProgress={followingInProgress}
                    />
                ))}
            </div>

            <Pagination
                pages={pages}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
        </>
    );
};
