import React, { Fragment } from 'react';
import { Card } from '../../components';
import HomeCounter from './HomeCounterContainer';
import HomeList from './HomeList';

const Home = () => (
  <Fragment>
    <Card title="Contador">
      <HomeCounter />
    </Card>
    <Card title="3 Pomodoros completados">
      <HomeList />
    </Card>
  </Fragment>
);

export default Home;
