import React, { useState, useEffect } from 'react';
import RedirectCard from '../../src/components/admin/RedirectCard'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

export default function Admin() {
  const router = useRouter();
  const user = useSelector(state => state.auth);

  useEffect(() => {
    if(!user || !user.roles.includes('admin')) router.replace('/');
  }, []);

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
