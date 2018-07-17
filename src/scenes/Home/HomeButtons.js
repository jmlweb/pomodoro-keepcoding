import React from 'react';
import { Box, Button, Flex } from 'rebass';

const HomeButtons = ({ active, bg, children, onClick }) => (
  <Box py={3}>
    <Flex justifyContent="center">
      <Button bg={bg} fontSize={3} onClick={onClick(!active)}>
        {children}
      </Button>
    </Flex>
  </Box>
);

export default HomeButtons;
