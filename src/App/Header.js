import React from 'react';
import { Box, Flex } from 'rebass';
import { Clock } from 'styled-icons/fa-regular';

const Header = () => (
  <Box bg="grayDark" color="white" p={3}>
    <Flex justifyContent="space-between" alignItems="center">
      <Clock size="24" />
      <div>home settings</div>
    </Flex>
  </Box>
);

export default Header;
