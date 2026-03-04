import { Layout } from "./components/layout/Layout";
import Gameboard from "./components/game/Gameboard";
const gameState = "active";

function App() {
  return (
    <Layout>
      <Gameboard />
    </Layout>
  );
}

export default App;
