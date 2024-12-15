import style from "./Login.module.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/AuthReducer";
import { Navigate } from "react-router-dom";

export const Login = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = ({ email, password, remember }) => {
        dispatch(login(email, password, remember));
        console.log(email, password, remember);
        reset();
    };

    if (isAuth) return <Navigate to={"/profile"} />;

    return (
        <div className={style.login__wrapper}>
            <h1 className={style.login__title}>Login</h1>
            <form
                className={style.login__form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <label htmlFor="email">
                    Email:
                    <br />
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required",
                        })}
                    />
                    <br />
                    {errors.email && (
                        <span className={style.error__validation}>
                            {errors.email.message}
                        </span>
                    )}
                </label>
                <label htmlFor="password">
                    Password:
                    <br />
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                    <br />
                    {errors.password && (
                        <span className={style.error__validation}>
                            {errors.password.message}
                        </span>
                    )}
                </label>

                <label
                    className={style.input__radio_wrapper}
                    htmlFor="remember"
                >
                    <input
                        id="remember"
                        type="checkbox"
                        {...register("remember")}
                    />
                    Remember me
                </label>
                {errors.form && (
                    <p style={{ color: "red" }}>{errors.form.message}</p>
                )}
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};
