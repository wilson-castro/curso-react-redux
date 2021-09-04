/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Main from '../template/Main'

export default props =>
  <Main icon="home" title='Início'
    subtitle="Segundo Projeto do capítulo de React">
    <div className="display-4">Bem-vindo!</div>
    <hr />
    <p classsName="mb-0">Sistema para exemplificara construção
      de um cadastro desenvolvido em React.</p>
  </Main>