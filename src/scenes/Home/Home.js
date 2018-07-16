import React, { Fragment } from 'react';
import { Card } from '../../components';

const Home = () => (
  <Fragment>
    <Card title="Contador">
      <div>Modo (trabajo/descanso)</div>
      <div>Reloj</div>
      <div>Tiempo total configurado</div>
      <div>Botón iniciar / Reset</div>
    </Card>
    <Card title="Pomodoros completados">
      <div>toggler</div>
      <div>Listado últimos pomodoros</div>
      <div>Contador simple</div>
    </Card>
  </Fragment>
);

export default Home;
