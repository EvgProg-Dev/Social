import style from "./Posts.module.css";
import { Post } from "./Post";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPostActionCreator } from "../../../redux/ProfileReducer";

export const Posts = ({ data }) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(addPostActionCreator(data.newPost));
        reset();
    };
    return (
        <>
            <div className={style.profile__addpost}>
                <h2 className={style.profile__title}>Add post:</h2>
                <form
                    className={style.input__wrapper}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        type="text"
                        placeholder="Enter text..."
                        {...register("newPost", {
                            required: "Enter to text...",
                        })}
                    />
                    <button type="submit" className={style.input__button}>
                        Add post
                    </button>
                </form>
                <div className="error__wrapper">
                    {errors.newPost && (
                        <span className="error__validation">
                            {errors.newPost.message}
                        </span>
                    )}
                </div>
            </div>
            <div className={style.profile__posts}>
                <h2 className={style.profile__title}>Posts:</h2>
                <div className={style.profile__posts_wrapper}>
                    {data.map((item) => (
                        <Post key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </>
    );
};
