import React from "react";
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import Footer from "./components/Footer";
import Header from "./components/Header";

const Heading = styled.h1`
  color: red;
  text-align: center
`

function App(): JSX.Element {
  return (
    <>
      <Heading>
        <Header/>
      </Heading>
      <main className='py-3'>
      <Container>
        <h1> Welcome to procommerce</h1>
      </Container>
      </main>
      <Footer/>
    </>

  );
}

export default App;
