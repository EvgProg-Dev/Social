import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";

export const DialogItem = ({id, name, img}) => {
    return (
        <NavLink
            to={`/messages/${id}`}
            className={({ isActive }) =>
                isActive
                    ? `${style.dialogs__item} ${style.active}`
                    : `${style.dialogs__item}`
            }
        >
            <img className={style.dialogs__item_img} src={img} alt={name} />
            <span>{name}</span>
        </NavLink>
    );
};
