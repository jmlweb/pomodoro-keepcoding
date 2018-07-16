import React from 'react';
import { Box, Button, Label, Input, Message } from 'rebass';
import { Card } from '../../components';

const Settings = () => (
  <Card title="Settings">
    <Message>Sus datos se han guardado correctamente</Message>
    <Box p={4}>
      <Box mb={3}>
        <Label>Tiempo trabajo</Label>
        <Input type="number" defaultValue={25} />
      </Box>
      <Box mb={3}>
        <Label>Tiempo descanso</Label>
        <Input type="number" defaultValue={5} />
      </Box>
      <Button bg="primary" color="white" fontSize={3}>
        Guardar
      </Button>
    </Box>
  </Card>
);

export default Settings;
