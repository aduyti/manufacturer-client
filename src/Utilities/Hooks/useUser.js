import { useState } from "react"

const useUser = email => {
    const [user, setUser] = useState({})
    return [user, setUser];
}