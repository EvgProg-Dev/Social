import { useEffect, useState } from "react";
import style from "./ProfileInfo.module.css";

export const ProfileStatusHooks = ({ status, updateStatus }) => {
    const [editMode, setEditMode] = useState(false);
    const [statusState, setStatusState] = useState(status);

    useEffect(() => {
        setStatusState(status || "");
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(statusState);
    };
    const onStatusChange = (e) => {
        setStatusState(e.target.value);
    };

    return (
        <div className={style.status__wrapper}>
            {editMode ? (
                <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    className={style.status__input}
                    type="text"
                    onBlur={deactivateEditMode}
                    value={statusState}
                />
            ) : (
                <span onDoubleClick={activateEditMode}>
                    {status ? status : "Add status..."}
                </span>
            )}
        </div>
    );
};
