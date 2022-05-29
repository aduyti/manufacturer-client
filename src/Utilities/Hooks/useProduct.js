import axios from "axios";
import { useEffect, useState } from "react";

const useProduct = (id) => {
    const [bolt, setBolt] = useState({});
    useEffect(() => {
        axios.get(`https://mysterious-coast-30403.herokuapp.com/bolt/${id}`)
            .then(result => setBolt(result.data))
    }, [id])
    return [bolt, setBolt];
};

export default useProduct;