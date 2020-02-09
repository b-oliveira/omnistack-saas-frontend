import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import Button from '~/styles/components/Button';

import { Container, SignForm } from '../styles';

export default function SignIn() {
  const [dataForm, setDataForm] = useState({});
  const { email, password } = dataForm;

  const dispatch = useDispatch();

  function handleChange(e) {
    dataForm[e.target.name] = e.target.value;

    setDataForm({
      ...dataForm,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <SignForm onSubmit={e => handleSubmit(e)}>
        <h1>Boas vindas</h1>

        <span>E-MAIL</span>
        <input type="email" name="email" onChange={e => handleChange(e)} />

        <span>SENHA</span>
        <input
          type="password"
          name="password"
          onChange={e => handleChange(e)}
        />

        <Button size="big" type="submit">
          Entrar
        </Button>
      </SignForm>
    </Container>
  );
}
