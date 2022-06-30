import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase/firebase.config";

export const ControllerScreeen = () => {
    const { setAuth } = useContext(AuthContext);
    function handleSignOut() {
        signOut(auth)
        .then((res) => {
            setAuth({email:"", uid:"", isAuthentificated:false});
        })
        .catch(console.log)
    }

    return (
        <>
            <button
                onClick={handleSignOut}
            >
                sign out
            </button>
        </>
    );
}