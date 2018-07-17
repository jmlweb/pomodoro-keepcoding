import React, { Fragment } from 'react';
import { Card } from '../../components';
import HomeProgress from './HomeProgress';
import HomeInfo from './HomeInfoContainer';
import HomeButtons from './HomeButtons';
import HomeList from './HomeList';

const Home = () => (
  <Fragment>
    <Card title="Contador">
      <HomeProgress />
      <HomeInfo />
      <HomeButtons />
    </Card>
    <Card title="3 Pomodoros completados">
      <HomeList />
    </Card>
  </Fragment>
);

export default Home;
