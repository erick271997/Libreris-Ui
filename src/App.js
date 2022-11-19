/* Para esta libreria se isntalo 
npm install --save styled-components
 */

import React from "react";
import styled from "styled-components";


/* import './App.css'; */

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

/* Cree un componente Wrapper que represente una etiqueta <section> con algunos estilos */
const Wrapper = styled.section`

  padding: 4em;
  background: papayawhip;
`;

function App () {
  return(
    <Wrapper>
         <div>
        <Title>
          Hello World!
        </Title>
      </div>
  
    </Wrapper>
   

  );
}

export default App;
