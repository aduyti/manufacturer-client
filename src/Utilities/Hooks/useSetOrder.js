import axios from "axios";
import { useEffect, useState } from "react";

const useSetOrder = (order) => {
    const [newOrder, setOrder] = useState({});
    useEffect(() => {
        axios.put('http://localhost:5555/order',
            JSON.stringify(order)
        ).then(res => setOrder(res.data))
    }, [order])
    return [newOrder, setOrder];
}
export default useSetOrder;