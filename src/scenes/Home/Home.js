import React, { Fragment } from 'react';
import { Card } from '../../components';
import HomeCounter from './HomeCounterContainer';
import HomeList from './HomeListContainer';

const Home = () => (
  <Fragment>
    <Card title="Contador">
      <HomeCounter />
    </Card>
    <HomeList />
  </Fragment>
);

export default Home;
