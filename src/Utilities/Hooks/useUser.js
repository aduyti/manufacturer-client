import axios from "axios";
import { useEffect, useState } from "react"

const useUser = email => {
    const [user, setUser] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:5555/user/${email}`)
            .then(res => setUser(res.data))
    }, [email]);
    return [user, setUser];
}
export default useUser;