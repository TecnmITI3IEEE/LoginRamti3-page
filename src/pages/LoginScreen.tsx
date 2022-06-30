import styles from "../styles/LoginScreen.module.css";
import ieeeLogo from "../assets/ieee_logo.webp";
import tecnmLogo from "../assets/tecnm_logo.webp";
import iti3Logo from "../assets/iti3_logo.webp";
import { Form } from "../components/Form";

export const LoginScreen = () => {
    return (
        <>
            <header className={styles.header}>
                <img
                    src={tecnmLogo}
                    alt="tecnm-logo"
                    className={styles.header_img}
                />
                <img
                    src={iti3Logo}
                    alt="iti3-logo"
                    className={styles.header_img}
                />
                <img
                    src={ieeeLogo}
                    alt="ieee-logo"
                    className={styles.header_img}
                />
            </header>
            <section
                className={styles   .main_content}
            >
                <Form />
            </section>
        </>
    );
}

