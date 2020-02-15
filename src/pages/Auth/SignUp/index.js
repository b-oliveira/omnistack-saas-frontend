import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUpRequest } from '~/store/modules/auth/actions';

import Button from '~/styles/components/Button';

import { Container, SignForm } from '../styles';

export default function SignUp() {
  const [dataForm, setDataForm] = useState({});
  const { name, email, password } = dataForm;

  const dispatch = useDispatch();

  function handleChange(e) {
    dataForm[e.target.name] = e.target.value;

    setDataForm({
      ...dataForm,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Container>
      <SignForm onSubmit={e => handleSubmit(e)}>
        <h1>Criar conta</h1>

        <span>NOME</span>
        <input type="text" name="name" onChange={e => handleChange(e)} />

        <span>E-MAIL</span>
        <input type="email" name="email" onChange={e => handleChange(e)} />

        <span>SENHA</span>
        <input
          type="password"
          name="password"
          onChange={e => handleChange(e)}
        />

        <Button size="big" type="submit">
          Criar
        </Button>
      </SignForm>
    </Container>
  );
}
