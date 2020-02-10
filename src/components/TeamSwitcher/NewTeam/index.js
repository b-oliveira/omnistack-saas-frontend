import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Button from '~/styles/components/Button';
import Modal from '~/components/Modal';

export default function NewTeam({ close }) {
  const [dataForm, setDataForm] = useState({});
  const { name } = dataForm;

  function handleChange(e) {
    dataForm[e.target.name] = e.target.value;

    setDataForm({
      ...dataForm,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post('teams', { name });

      close(response.data);
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <Modal>
      <h1>Criar time</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <span>NOME</span>
        <input type="text" name="name" onChange={e => handleChange(e)} />
        <Button size="big" type="submit">
          Salvar
        </Button>
        <Button size="small" color="gray" onClick={close}>
          Cancelar
        </Button>
      </form>
    </Modal>
  );
}

NewTeam.propTypes = {
  close: PropTypes.func.isRequired,
};
