import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Button from '~/styles/components/Button';

import { Container, ProjectItem } from './styles';

export default function Project() {
  const [projects, setProjects] = useState([]);
  const { currentTeam } = useSelector(state => state.team);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await api.get('projects');

        setProjects(response.data);
      } catch (err) {
        toast.error(err.message);
      }
    }

    loadProjects();
  }, [currentTeam]);

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
        {projects.map(project => (
          <ProjectItem key={project.id}>
            <p>{project.title}</p>
          </ProjectItem>
        ))}
      </Container>
    )
  );
}
