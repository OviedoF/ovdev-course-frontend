import React from 'react'
import RedirectCard from '../../src/components/admin/RedirectCard'

export default function Admin() {
  return (
    <main>
      <RedirectCard text={'Agregar curso'} redirect='add-course'/>

      <RedirectCard text={'Agregar tópico'} redirect='add-topic'/>

      <RedirectCard text={'Ver mensajes'} redirect='messages'/>

      <RedirectCard text={'Administrar cuentas'} redirect='accounts'/>

      <style jsx>{`
        main{
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-wrap: wrap;
          height: 100vh;
        }
      `}</style>
    </main>
  )
}
