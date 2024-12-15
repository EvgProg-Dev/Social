import style from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.logo__wrapper}>
                <img src="./react.svg" alt="ReactSocial LOGO" />
                <span>ReactSocial</span>
            </div>
            <p>Footer</p>
        </footer>
    );
};
