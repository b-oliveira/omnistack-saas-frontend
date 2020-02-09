import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { setCurrentTeam } from '~/store/modules/team/actions';

import { Container, TeamList, Team } from './styles';

export default function TeamSwitcher() {
  const [teams, setTeams] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadTeams() {
      try {
        const response = await api.get('teams');

        setTeams(response.data);
      } catch (err) {
        toast.error(err.message);
      }
    }

    loadTeams();
  }, []);

  function handleCurrentTeam(team) {
    dispatch(setCurrentTeam(team));
  }

  return (
    <Container>
      <TeamList>
        {teams.map(team => (
          <Team key={team.id} onClick={() => handleCurrentTeam(team)}>
            <img
              alt={team.name}
              src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}
            />
          </Team>
        ))}
      </TeamList>
    </Container>
  );
}
