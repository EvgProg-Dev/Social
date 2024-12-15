import style from './MessageItem.module.css'

export const MessageItem = ({message}) => {
    return <>
    <div className={style.messages__item}>{message}</div>

    </>;
};