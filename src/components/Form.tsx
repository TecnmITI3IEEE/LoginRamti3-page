import { FormEvent, useContext } from "react";
import { useForm } from "../hooks/useForm";
import styles from "../styles/LoginScreen.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface FormValues {
    email: string,
    password: string
}

const initialState = {
    email: "",
    password: ""
}

export const Form = () => {
    const navigation = useNavigate();
    const { values, handleChange, reset } = useForm<FormValues>(initialState);
    const { email, password } = values;
    const { setAuth } = useContext(AuthContext);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const { uid, email } = user;
            console.log(user)
            setAuth({email, uid, isAuthentificated: true })
            navigation("/controllers")
            // ...
          })
          .catch((error) => {
            Swal.fire({
                title: "Error",
                icon: "error",
                text:"Usuario no encontrado",
          });
            const errorCode = error.code;
            const errorMessage = error.message;
          });
          reset();
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <h3>RESTRINGIDO</h3>
            <input
                type="email"
                className={styles.field_text}
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
            />
            <input
                type="password"
                className={styles.field_text}
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <span className={styles.form_label}>Accesso exclusivo para administradores.</span>
            <input
                type="submit"
                className={styles.submit_button}
                value={"Comprobar"}
            />
        </form>
    );
}