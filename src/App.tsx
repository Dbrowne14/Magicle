import { Layout } from "./components/layout/Layout";

const gameState = "active";

function App() {
  return (
    <Layout>
      <div className="w-full h-50 bg-[rgba(1,1,1,0.7)] text-white">
        {" "}
        Gameboard
      </div>
    </Layout>
  );
}

export default App;
