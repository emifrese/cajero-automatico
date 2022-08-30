import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import OperationsPanel from '../components/Panel/OperationsPanel';
import Button from '../components/UI/Button';
import Footer from '../components/UI/Footer';
import Header from '../components/UI/Header'
import useAuth from '../hooks/useAuth'

const Operations = () => {
    const navigate = useNavigate()
    const {auth, setAuth, tryUpdateJSON} = useAuth();

    useEffect(() => {
        // Leave it like this to work without having to log again
        // let timer = setTimeout(() => {
        //     setAuth({})
        //     localStorage.removeItem('account')
        //     navigate('/')
        //   }, 20000);
      
        //   return () => {
        //     clearTimeout(timer)
        //   };
    }, [])

  return (
    <>
    <Header title={`Bienvenido ${auth.nombre}`} subtitle={'¿Qué operación deseas realizar?'}/>
    <OperationsPanel />
    <Footer>
        <Button text={"Cancelar"}
        type={"footer"}
        valueHandler={() => {
            setAuth({})
            localStorage.removeItem('account')
            navigate("/")}}/>
    </Footer>
    </>
  )
}

export default Operations