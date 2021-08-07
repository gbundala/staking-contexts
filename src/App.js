import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";

function App() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Main>
        <ContentWrapper> (Imagine an Entire App here!)</ContentWrapper>
      </Main>
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: hsl(0deg, 0%, 5%);
  color: white;
  isolation: isolate;
`;

const HeaderWrapper = styled.div`
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  background: hsla(0deg, 0%, 0%, 0.75);
  backdrop-filter: blur(10px);
`;

const Main = styled.main`
  position: relative;
  padding: 8px;
`;

const ContentWrapper = styled.div`
  background: white;
  color: hsl(0deg, 0%, 10%);
  border-radius: 16px;
  /* HACK: Forcing it to be tall enough to scroll */
  min-height: 1300px;
  padding: 16px;
  box-shadow: 0px 0px 16px black;
`;

export default App;
