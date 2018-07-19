import React, { Fragment } from 'react';
import { Box, Message } from 'rebass';
import HomeListPomodoro from './HomeListPomodoro';
import { Card } from '../../components';

const HomeList = ({ pomodoros, pomodorosLength }) => (
  <Card title={`${pomodorosLength} Pomodoros completados`}>
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
  </Card>
);

export default HomeList;
