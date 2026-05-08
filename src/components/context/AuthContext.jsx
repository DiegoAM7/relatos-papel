import {createContext} from "react";
import {users} from "../mocks/users";
import useLocalStorage from "../hooks/useLocalStorage.js";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocalStorage("session_user", null);

    const login = ({email, password}) => {
        const foundUser = users.find(
            (item) => item.email === email && item.password === password,
        );

        if (!foundUser) {
            return {success: false, message: "Credenciales incorrectas"};
        }

        const safeUser = {...foundUser};
        delete safeUser.password;
        setUser(safeUser);
        return {success: true, message: "Inicio de sesión exitoso"};
    };

    const logout = () => {
        setUser(null);
    };

    const value = {
        user,
        isAuthenticated: Boolean(user),
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
