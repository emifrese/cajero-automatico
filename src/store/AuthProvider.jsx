import axios from "axios";
import { createContext, useEffect, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [cargando, setCargando] = useState(true);
  const [auth, setAuth] = useState({});
  const [modal, setModal] = useState(false);

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

  
  const modalHandler = () => {
    setModal(prevState => !prevState)
  }
  
    const extractMoney = async (amount) => {
      console.log(auth.info.amount)
      console.log(amount)
      if(amount > auth.info.amount){
       setModal(prevState => !prevState)
      } else {
        console.log(`Extrajo $${amount}. Ahora su saldo es $${auth.info.amount - amount}`)
      }
    }

  return (
    <AuthContext.Provider 
        value={{
            auth, 
            setAuth,
            cargando,
            extractMoney,
            modal,
            modalHandler
        }}
    >
        {children}
    </AuthContext.Provider>
  )
};

export { AuthProvider };

export default AuthContext;