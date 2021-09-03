/* eslint-disable import/no-anonymous-default-export */
import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
  <React.Fragment>
    <Header />
    <main className="content">
      Conteúdo
    </main>
  </React.Fragment>