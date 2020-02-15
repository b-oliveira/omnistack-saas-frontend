import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import api from '~/services/api';

import NewProject from './NewProject';

import Member from '~/components/Member';

import Button from '~/styles/components/Button';
import { Container, ProjectItem } from './styles';

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(false);
  const [newMember, setNewMember] = useState(false);

  const { currentTeam } = useSelector(state => state.team);

  useEffect(() => {
    async function loadProjects() {
      try {
        if (currentTeam) {
          const response = await api.get('projects');

          setProjects(response.data);
        }
      } catch (err) {
        toast.error(err.message);
      }
    }

    loadProjects();
  }, [currentTeam]);

  function handleCloseModalProject(project) {
    if (project) setProjects([...projects, project]);

    setNewProject(false);
  }

  function handleCloseModalMember() {
    setNewMember(false);
  }

  return (
    currentTeam && (
      <Container>
        <header>
          <h1>{currentTeam.name}</h1>
          <div>
            <Button onClick={() => setNewProject(true)}>+ Novo</Button>
            <Button onClick={() => setNewMember(true)}>Membros</Button>
          </div>
        </header>
        {projects.map(project => (
          <ProjectItem key={project.id}>
            <p>{project.title}</p>
          </ProjectItem>
        ))}

        {newProject && <NewProject close={handleCloseModalProject} />}

        {newMember && <Member close={handleCloseModalMember} />}
      </Container>
    )
  );
}
