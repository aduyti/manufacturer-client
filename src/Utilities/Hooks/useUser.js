import axios from "axios";
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useUser = () => {
    const [user] = useAuthState(auth);
    const [nuser, setUser] = useState({});
    useEffect(() => {
        axios.get(`https://mysterious-coast-30403.herokuapp.com/user/${user.email}`)
            .then(res => setUser(res.data))

    }, [user]);
    return [nuser, setUser];
}
export default useUser;