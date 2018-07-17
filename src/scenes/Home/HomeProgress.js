import React from 'react';
import { Flex, Donut } from 'rebass';

const HomeProgress = ({ progressValue = 3 / 4 }) => (
  <Flex justifyContent="center">
    <Donut value={progressValue} strokeWidth={3} size={192} is="div" />
  </Flex>
);

export default HomeProgress;
