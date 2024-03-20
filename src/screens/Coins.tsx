import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { fetchCoins } from "../api";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: ${[(props) => props.theme.accentColor]};
  font-size: 48px;
  font-weight: 600;
`;
const CoinList = styled.ul``;
const Coin = styled.li`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  margin-bottom: 10px;
  a {
    display: block;
    padding: 16px;
    transition: color 0.2s ease-in;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Loader = styled.span`
  display: block;
  text-align: center;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.map((coin) => (
            <Coin key={coin.id}>
              <Link to={coin.id} state={{ id: coin.id, name: coin.name }}>
                {coin.name}
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Coins;
