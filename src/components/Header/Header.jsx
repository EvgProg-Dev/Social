import { Navigate, NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { loguout } from "../../redux/AuthReducer";
import { useDispatch } from "react-redux";

export const Header = ({ isAuth, login }) => {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(loguout());
        <Navigate to="/login" />;
    };

    return (
        <header className={style.header}>
            <div className={style.logo__wrapper}>
                <img
                    className="logo react"
                    src="./react.svg"
                    alt="ReactSocial LOGO"
                />
                <span>ReactSocial</span>
            </div>
            <div className={style.login__wrapper}>
                {isAuth ? (
                    <button onClick={logout}>LogOut ({login})</button>
                ) : (
                    <NavLink to={"/login"}>Login</NavLink>
                )}
            </div>
        </header>
    );
};
