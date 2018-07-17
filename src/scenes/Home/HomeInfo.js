import React from 'react';
import { Lead, Badge } from 'rebass';

const HomeInfo = ({ clockValue, mode }) => (
  <Lead textAlign="center">
    -{clockValue} <Badge>{mode}</Badge>
  </Lead>
);

export default HomeInfo;
