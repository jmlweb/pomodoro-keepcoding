import React, { Fragment } from 'react';
import { Box, Message } from 'rebass';
import HomeListPomodoro from './HomeListPomodoro';

const HomeList = ({
  pomodoros = [
    { workingTime: 1500, restingTime: 300, createdAt: '23 junio 2018' },
  ],
}) => (
  <Box>
    {pomodoros.length ? (
      <Fragment>
        <HomeListPomodoro
          workingTime="Tiempo trabajo"
          restingTime="Tiempo descanso"
          createdAt="Creado"
          heading
        />
        {pomodoros.map(({ workingTime, restingTime, createdAt }) => (
          <HomeListPomodoro
            key={createdAt}
            workingTime={workingTime}
            restingTime={restingTime}
            createdAt={createdAt}
          />
        ))}
      </Fragment>
    ) : (
      <Message>Aún no hay pomodoros</Message>
    )}
  </Box>
);

export default HomeList;
