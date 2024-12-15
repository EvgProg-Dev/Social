import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className={style.item}>
                    <NavLink className={({isActive}) => (isActive ? `${style.active}` : '')} to="/profile">Profile</NavLink>
                </li>
                <li className={`${style.item}`}>
                    <NavLink className={({isActive}) => (isActive ? `${style.active}` : '')}  to="/messages">Messages</NavLink>
                </li>
                <li className={`${style.item}`}>
                    <NavLink className={({isActive}) => (isActive ? `${style.active}` : '')}  to="/news">News</NavLink>
                </li>
                <li className={`${style.item}`}>
                    <NavLink className={({isActive}) => (isActive ? `${style.active}` : '')}  to="/music">Music</NavLink>
                </li>
                <li className={`${style.item}`}>
                    <NavLink className={({isActive}) => (isActive ? `${style.active}` : '')}  to="/users">Users</NavLink>
                </li>
                <li className={`${style.item}`}>
                    <NavLink className={({isActive}) => (isActive ? `${style.active}` : '')}  to="/settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};
