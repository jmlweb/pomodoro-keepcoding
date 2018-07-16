import React from 'react';
import { Box, Button, Flex } from 'rebass';

const HomeButtons = ({ isActivated = false }) => (
  <Box py={3}>
    <Flex justifyContent="center">
      <Button
        fontSize={3}
        {...(isActivated
          ? { bg: 'danger', children: 'Reset' }
          : { bg: 'success', children: 'Iniciar' })}
      />
    </Flex>
  </Box>
);

export default HomeButtons;
