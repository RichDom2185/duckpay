import Menu from "../components/Menu";
import TokenCard from "../components/TokenCard";
import { Token } from "../types/types";

const tokens: Token[] = [
  {
    id: "id1",
    accountId: "test",
    amount: 10,
    currency: "SGD",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-02"),
  },
  {
    id: "id2",
    accountId: "test",
    amount: 20,
    currency: "SGD",
    createdAt: new Date("2023-02-01"),
    updatedAt: new Date("2023-02-05"),
  },
  {
    id: "id3",
    accountId: "test",
    amount: 30,
    currency: "SGD",
    createdAt: new Date("2023-03-01"),
    updatedAt: new Date("2023-03-05"),
  },
  {
    id: "id4",
    accountId: "test",
    amount: 40,
    currency: "SGD",
    createdAt: new Date("2023-04-01"),
    updatedAt: new Date("2023-04-03"),
  },
  {
    id: "id5",
    accountId: "test",
    amount: 50,
    currency: "SGD",
    createdAt: new Date("2023-05-01"),
    updatedAt: new Date("2023-05-06"),
  },
  {
    id: "id6",
    accountId: "test",
    amount: 60,
    currency: "SGD",
    createdAt: new Date("2023-06-01"),
    updatedAt: new Date("2023-06-04"),
  },
  {
    id: "id7",
    accountId: "test",
    amount: 70,
    currency: "SGD",
    createdAt: new Date("2023-07-01"),
    updatedAt: new Date("2023-07-05"),
  },
  {
    id: "id8",
    accountId: "test",
    amount: 80,
    currency: "SGD",
    createdAt: new Date("2023-08-01"),
    updatedAt: new Date("2023-08-03"),
  },
  {
    id: "id9",
    accountId: "test",
    amount: 90,
    currency: "SGD",
    createdAt: new Date("2023-09-01"),
    updatedAt: new Date("2023-09-05"),
  },
  {
    id: "id10",
    accountId: "test",
    amount: 100,
    currency: "SGD",
    createdAt: new Date("2023-10-01"),
    updatedAt: new Date("2023-10-02"),
  },
];

const Home: React.FC = () => {
  return (
    <>
      <Menu tokens={tokens} />
      <div className="flex flex-wrap justify-center items-center m-4">
        {tokens.map((token) => (
          <TokenCard
            key={token.id}
            accountId={token.accountId}
            tokenId={token.id}
            tokenAmount={token.amount.toString()}
          />
        ))}
      </div>
    </>
  );
};

export const Component = Home;
Component.displayName = "Home";

export default Home;
