import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [bolts, setBolts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5555/bolts')
            .then(results => setBolts(results.data))
    }, [])
    return [bolts, setBolts];
};

export default useProducts;