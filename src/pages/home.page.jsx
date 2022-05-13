import styled from "styled-components";

const ShowChase = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
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
    <ShowChase>
      <HeaderContainer>
        <h1>welcome to home page </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          veniam sint molestiae facilis ex est atque nesciunt at quis unde ipsum
          aut, fugit animi ratione ullam quos dolore! Nesciunt, quo!
        </p>
      </HeaderContainer>
    </ShowChase>
  );
};

export default HomePage;
