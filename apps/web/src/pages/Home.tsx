import Menu from "../components/Menu";
import TokenCard from "../components/TokenCard";
import { Token } from "../types/types";

const tokens: Token[] = [
  {
    id: "id1sbdkjabskfjdbsaljbfaj3025uy8913u498h9hw3hr9qhsbljasbaslbflsdbfguhse",
    accountId: "test",
    amount: 10,
    currency: "SGD",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-02"),
  },
  {
    id: "id28y5-y34qv8nu38fq58n3fqd8m-f85u-dv5yn98w4ngy5894yfytb40qq3dnq-fn-qnv",
    accountId: "test",
    amount: 20,
    currency: "SGD",
    createdAt: new Date("2023-02-01"),
    updatedAt: new Date("2023-02-05"),
  },
  {
    id: "id346729y69384yng-98qef84vng-w5awntpiehpqn-g49fuN{NUy53g(gy35w938ny5o",
    accountId: "test",
    amount: 30,
    currency: "SGD",
    createdAt: new Date("2023-03-01"),
    updatedAt: new Date("2023-03-05"),
  },
  {
    id: "id4viert9-enuqg-948r84NY9W5YGNYG46yy8wre8ur-43uqm9utpnwrhpRNPIwnignp",
    accountId: "test",
    amount: 40,
    currency: "SGD",
    createdAt: new Date("2023-04-01"),
    updatedAt: new Date("2023-04-03"),
  },
  {
    id: "id5fjvinrt895gq-u6qub4tnuesdamievnifu[rfNU%EUGNVMRNBe9mfwv{[vW3U905[",
    accountId: "test",
    amount: 50,
    currency: "SGD",
    createdAt: new Date("2023-05-01"),
    updatedAt: new Date("2023-05-06"),
  },
  {
    id: "id6HVP#8QhrhcHVCHERHEWHw35VRPX9AWVeEMCSXRUE9Uuepvtaebtebyhapcvmpapvp",
    accountId: "test",
    amount: 60,
    currency: "SGD",
    createdAt: new Date("2023-06-01"),
    updatedAt: new Date("2023-06-04"),
  },
  {
    id: "id7u4tnv3fqnP8N5U38-UMJVNTTM--MVR-mtvwmqvtmquvmaw-a5894u31-53v914=1",
    accountId: "test",
    amount: 70,
    currency: "SGD",
    createdAt: new Date("2023-07-01"),
    updatedAt: new Date("2023-07-05"),
  },
  {
    id: "id8vn-t4uv5y4yu=u-2ud9skuduf4f--U4F5DQ2MV4UTN45uvu4ww5ftu8138v4-cm",
    accountId: "test",
    amount: 80,
    currency: "SGD",
    createdAt: new Date("2023-08-01"),
    updatedAt: new Date("2023-08-03"),
  },
  {
    id: "id90anev0tryq0PNYV83tMVR8Rtnv402vtmwerc88rb-wftueu9jmfosiahhyeuy08",
    accountId: "test",
    amount: 90,
    currency: "SGD",
    createdAt: new Date("2023-09-01"),
    updatedAt: new Date("2023-09-05"),
  },
  {
    id: "id10t2h89y56-12hncrjmP8UP4933QTu9-U842Y4HTHPVN9W1-M493U2Mmr9uteryp",
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
          <TokenCard token={token} />
        ))}
      </div>
    </>
  );
};

export const Component = Home;
Component.displayName = "Home";

export default Home;
