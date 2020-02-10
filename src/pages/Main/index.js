import React from 'react';

import TeamSwitcher from '~/components/TeamSwitcher';
import Project from '~/components/Project';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <TeamSwitcher />
      <Project />
    </Container>
  );
}
