import styled from "styled-components";
import { FlexCenter } from "../styled.components/styled.components";

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  max-width: 1200px;
  padding: 10px;
  text-align: center;
`;
const HomePage = () => {
  return (
    <FlexCenter>
      <HeaderContainer>
        <h1>welcome to home page </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          veniam sint molestiae facilis ex est atque nesciunt at quis unde ipsum
          aut, fugit animi ratione ullam quos dolore! Nesciunt, quo!
        </p>
      </HeaderContainer>
    </FlexCenter>
  );
};

export default HomePage;
