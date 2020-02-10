import React from 'react';
import { useSelector } from 'react-redux';

import Button from '~/styles/components/Button';

import { Container, ProjectItem } from './styles';

export default function Project() {
  const { currentTeam } = useSelector(state => state.team);

  return (
    currentTeam && (
      <Container>
        <header>
          <h1>{currentTeam.name}</h1>
          <div>
            <Button onClick={() => {}}>+ Novo</Button>
            <Button onClick={() => {}}>Membros</Button>
          </div>
        </header>
        <ProjectItem>
          <p>Aplicação com ReactJS</p>
        </ProjectItem>
        <ProjectItem>
          <p>Aplicação com ReactJS</p>
        </ProjectItem>
        <ProjectItem>
          <p>Aplicação com ReactJS</p>
        </ProjectItem>
        <ProjectItem>
          <p>Aplicação com ReactJS</p>
        </ProjectItem>
      </Container>
    )
  );
}
