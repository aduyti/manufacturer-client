import axios from "axios";
import { useEffect, useState } from "react";

const useOrdersEmail = (email) => {
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5555/myorders/${email}`)
            .then(res => setOrder(res.data))
    }, [email])
    return [orders, setOrder];
};

export default useOrdersEmail;