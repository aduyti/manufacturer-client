import axios from "axios";
import { useEffect, useState } from "react";

const useProduct = (id) => {
    const [bolt, setBolt] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5555/bolt/${id}`)
            .then(result => setBolt(result.data))
    }, [id])
    return [bolt, setBolt];
};

export default useProduct;