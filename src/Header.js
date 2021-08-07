import { useState } from "react";
import styled from "styled-components";
import LoginModal from "./ReachLoginModal";

function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Wrapper>
      <h1>Awesome App Created by Bundz</h1>
      <Button onClick={() => setShowModal(true)}>Log in</Button>
      <LoginModal isOpen={showModal} onDismiss={() => setShowModal(false)} />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 0 32px;
`;

const Button = styled.button`
  padding: 8px;
`;

export default Header;
