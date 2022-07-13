import { createContext, useContext, useState } from "react"

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("Jace")
    const loginUser = () => {
        console.log("WORKING")
    }
    return (
        <AuthContext.Provider value={{ loginUser }}>
            { children }
        </AuthContext.Provider>
    )
}


export const useAuthContext = () => useContext(AuthContext)

export default AuthProvider