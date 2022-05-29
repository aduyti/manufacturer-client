import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import useUser from "../Hooks/useUser";

const RequireUser = ({ children }) => {
    const [user] = useAuthState(auth);

    const [cUser] = useUser(user.email);
    console.log(cUser);
    return children;
};

export default RequireUser;