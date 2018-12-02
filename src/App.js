import React, { Component } from 'react';
import styled from 'styled-components';
import prop from 'lodash/fp/prop';


const Container = styled.div`
  background-color: ${prop('theme.colors.brand.darkGrey')};
  min-height: 100vh;
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${prop('theme.fontSizes.large')};
  color: ${prop('theme.colors.brand.white')};
`;

const Body = styled.section`

`;


class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <p>Registration Form Component Demo Page</p>
        </Header>
        <Body>

        </Body>
      </Container>
    );
  }
}

export default App;
