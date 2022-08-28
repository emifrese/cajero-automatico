import React from 'react'
import { useNavigate } from 'react-router-dom'
import ExtractionsPanel from '../components/Panel/ExtractionsPanel'
import Header from '../components/UI/Header'
import Footer from '../components/UI/Footer'
import Button from '../components/UI/Button'

const Extractions = () => {
  const navigate = useNavigate();

  return (
    <>
    <Header title={'Extracción'}/>
    <ExtractionsPanel />
    <Footer>
      <Button text={'Cancelar'} type={'footer'} valueHandler={() => navigate('/account')} />
      <Button text={'Continuar'} type={'footer'} valueHandler={() => {}}/>
    </Footer>

    </>
  )
}

export default Extractions