import style from "./Post.module.css";

export const Post = ({ data }) => {
    const { name, date, postText, like, dislike, img } = data;
    return (
        <div className={style.post}>
            <div className={style.post__info}>
                <img src={img} alt={name} />
                <div className={style.post__item}>
                    <h3>{name}</h3>
                    <p>{date}</p>
                </div>
            </div>
            <p>{postText}</p>
            <div className={style.favorite__wrapper}>
                <button>[{like}] 👍 Like</button>
                <button>[{dislike}] 👎 Dislike</button>
            </div>
        </div>
    );
};
