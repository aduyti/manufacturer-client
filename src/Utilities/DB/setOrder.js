import axios from "axios";

const setOrder = (order, available) => {

    axios.post('http://localhost:5555/order', [order, available])
}
export default setOrder;