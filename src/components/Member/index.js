import React from 'react';
import PropTypes from 'prop-types';

import Button from '~/styles/components/Button';
import Modal from '~/components/Modal';
import { List } from './styles';

export default function Member({ close }) {
  return (
    <Modal size="big">
      <h1>Membros</h1>
      <form>
        <List>
          <li>
            <strong>Brenner Oliveira</strong>
          </li>
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
