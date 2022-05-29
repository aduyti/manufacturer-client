import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [bolts, setBolts] = useState([]);
    useEffect(() => {
        axios.get('https://mysterious-coast-30403.herokuapp.com/bolts')
            .then(results => setBolts(results.data))
    }, [])
    return [bolts, setBolts];
};

export default useProducts;