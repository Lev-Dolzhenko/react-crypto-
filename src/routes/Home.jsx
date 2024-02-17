import { CoinSearch } from "../components/CoinSearch";
import { Trending } from "../components/Trending";

function Home({coins}) {
  return (
    <>
      <CoinSearch coins={coins} />
      <Trending />
    </>
  );
}

export default Home;
