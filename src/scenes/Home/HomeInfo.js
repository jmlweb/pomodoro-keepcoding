import React from 'react';
import { Lead, Badge } from 'rebass';

const HomeInfo = ({ clockValue = '-23:12', mode }) => (
  <Lead textAlign="center">
    {clockValue} <Badge>{mode}</Badge>
  </Lead>
);

export default HomeInfo;
