import React, { Fragment } from 'react';
import HomeProgress from './HomeProgressContainer';
import HomeInfo from './HomeInfoContainer';
import HomeButtons from './HomeButtonsContainer';

const HomeCounter = () => (
  <Fragment>
    <HomeProgress />
    <HomeInfo />
    <HomeButtons />
  </Fragment>
);

export default HomeCounter;
