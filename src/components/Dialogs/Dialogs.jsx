import style from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem";
import { MessageItem } from "./MessageItem";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { sendMessageActionCreator } from "../../redux/MessagesReducer";

export const Dialogs = ({ data, isAuth }) => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(sendMessageActionCreator(data.newMessage));
        reset();
    };

    if (!isAuth) return <Navigate to={"/login"} />;

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__items}>
                {data.dialogs.map((user) => (
                    <DialogItem key={user.id} {...user} />
                ))}
            </div>
            <div className={style.messages__items_wrapper}>
                <div className={style.messages__items}>
                    {data.messages.map((message) => (
                        <MessageItem
                            key={message.id}
                            message={message.message}
                        />
                    ))}
                </div>
                <form
                    className={style.sendMessage}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        type="text"
                        placeholder="Enter text..."
                        {...register("newMessage", {
                            required: "Enter to text...",
                        })}
                    />
                    <button type="submit" className={style.input__button}>
                        Send
                    </button>
                </form>
                <div className="error__wrapper">
                    {errors.newMessage && (
                        <span className="error__validation">
                            {errors.newMessage.message}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};
