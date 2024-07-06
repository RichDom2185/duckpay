import Menu from "../components/Menu";
import Token from "../components/Token";

const tokens: Token[] = [
  { tokenId: "id1", tokenAmount: 10 },
  { tokenId: "id2", tokenAmount: 20 },
  { tokenId: "id3", tokenAmount: 30 },
  { tokenId: "id4", tokenAmount: 40 },
  { tokenId: "id5", tokenAmount: 50 },
  { tokenId: "id6", tokenAmount: 60 },
  { tokenId: "id7", tokenAmount: 70 },
  { tokenId: "id8", tokenAmount: 80 },
  { tokenId: "id9", tokenAmount: 90 },
  { tokenId: "id10", tokenAmount: 100 },
];

const Home: React.FC = () => {
  return (
    <>
      <Menu tokens={tokens} />
      <div className="flex flex-wrap justify-center items-center m-4">
        {tokens.map((token) => (
          <Token
            key={token.tokenId}
            tokenId={token.tokenId}
            tokenAmount={token.tokenAmount.toString()}
          />
        ))}
      </div>
    </>
  );
};

export const Component = Home;
Component.displayName = "Home";

export default Home;
