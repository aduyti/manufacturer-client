import axios from "axios";
import { useEffect, useState } from "react";

const useOrdersEmail = (email) => {
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        axios.get(`https://mysterious-coast-30403.herokuapp.com/myorders/${email}`)
            .then(res => setOrder(res.data))
    }, [email])
    return [orders, setOrder];
};

export default useOrdersEmail;