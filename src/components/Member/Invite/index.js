import React, { useState } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Can from '~/components/Can';

import Button from '~/styles/components/Button';
import { Container } from './styles';

export default function Invite() {
  const [dataForm, setDataForm] = useState({});

  const { email } = dataForm;

  function handleChange(e) {
    dataForm[e.target.name] = e.target.value;

    setDataForm({
      ...dataForm,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post('invites', { invites: [email] });

      toast.success('Convite enviado com sucesso!');
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <Can permission="invites_create">
      <Container onSubmit={e => handleSubmit(e)}>
        <input
          type="email"
          name="email"
          placeholder="Convidar para o time"
          onChange={e => handleChange(e)}
        />
        <Button type="submit">Enviar</Button>
      </Container>
    </Can>
  );
}
