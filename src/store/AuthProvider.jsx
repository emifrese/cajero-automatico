import axios from "axios";
import { createContext, useEffect, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [cargando, setCargando] = useState(true);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const autenticarUsuario = async () => {
        const id = localStorage.getItem('account')
        if(!id) {
            setCargando(false)
            return;
        }

        try {
            const accounts = await axios.get('clients.json')
            console.log(accounts)
            const [account] = accounts.data.accounts.filter(account => account.dni === id)
            setAuth(account)
        } catch (error) {
            console.log(error);
            setAuth({})
        }

        setCargando(false)
    }

    autenticarUsuario()
  }, []);

  return (
    <AuthContext.Provider 
        value={{
            auth, 
            setAuth,
            cargando
        }}
    >
        {children}
    </AuthContext.Provider>
  )
};

export { AuthProvider };

export default AuthContext;