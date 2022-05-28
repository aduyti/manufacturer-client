import axios from "axios";

const setOrder = order => {
    axios.post('http://localhost:5555/order',
        JSON.stringify(order)
    )
}
export default setOrder;