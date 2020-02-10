import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Button from '~/styles/components/Button';
import Modal from '~/components/Modal';
import { List } from './styles';

export default function Member({ close }) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function loadMembers() {
      try {
        const response = await api.get('members');

        setMembers(response.data);
      } catch (err) {
        toast.error(err.message);
      }
    }

    loadMembers();
  }, []);

  return (
    <Modal size="big">
      <h1>Membros</h1>
      <form>
        <List>
          {members.map(member => (
            <li key={member.id}>
              <strong>{member.user.name}</strong>
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
