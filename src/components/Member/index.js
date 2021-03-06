import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Select from 'react-select';

import api from '~/services/api';

import Invite from './Invite';

import Can from '~/components/Can';
import Modal from '~/components/Modal';

import Button from '~/styles/components/Button';
import { List } from './styles';

export default function Member({ close }) {
  const [members, setMembers] = useState([]);
  const [roles, setRoles] = useState([]);

  async function handleLoadMembers() {
    try {
      const response = await api.get('members');

      setMembers(response.data);
    } catch (err) {
      toast.error(err.message);
    }
  }

  useEffect(() => {
    handleLoadMembers();
  }, []);

  useEffect(() => {
    async function loadRoles() {
      try {
        const response = await api.get('roles');

        setRoles(response.data);
      } catch (err) {
        toast.error(err.message);
      }
    }

    loadRoles();
  }, []);

  async function handleRolesChange(member, values) {
    try {
      await api.put(`members/${member.id}`, {
        roles: values ? values.map(role => role.id) : [],
      });

      handleLoadMembers();

      toast.success('Permissões atualizadas com sucesso!');
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <Modal size="big">
      <h1>Membros</h1>

      <Invite />

      <form>
        <List>
          {members.map(member => (
            <li key={member.id}>
              <strong>{member.user.name}</strong>
              <Can role="administrator">
                {can => (
                  <Select
                    isDisabled={!can}
                    isMulti
                    options={roles}
                    value={member.roles}
                    getOptionLabel={role => role.name}
                    getOptionValue={role => role.id}
                    onChange={values => handleRolesChange(member, values)}
                  />
                )}
              </Can>
            </li>
          ))}
        </List>
        <Button filled={false} color="gray" onClick={() => close()}>
          Cancelar
        </Button>
      </form>
    </Modal>
  );
}

Member.propTypes = {
  close: PropTypes.func.isRequired,
};
