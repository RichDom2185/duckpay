import Menu from "../components/Menu";
import Token from "../components/Token";

const tokens = [
  { id: 1, amount: 10 },
  { id: 2, amount: 20 },
  { id: 3, amount: 30 },
  { id: 4, amount: 40 },
  { id: 5, amount: 50 },
  { id: 6, amount: 60 },
  { id: 7, amount: 70 },
  { id: 8, amount: 80 },
  { id: 9, amount: 90 },
  { id: 10, amount: 100 },
];

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <div className="flex flex-wrap justify-center items-center m-4">
        {tokens.map((token) => (
          <Token
            key={token.id.toString()}
            tokenId={token.id.toString()}
            tokenValue={token.amount.toString()}
          />
        ))}
      </div>
    </>
  );
};

export const Component = Home;
Component.displayName = "Home";

export default Home;
