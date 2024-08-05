import GameCard from "./GameCard"

const gameList = [
  {
    id: 0,
    name: "Cribbage",
    rating: null,
    category: "Board game"
  },
  {
    id: 1,
    name: "Mancala",
    rating: null,
    category: "Board game"
  },
  {
    id: 2,
    name: "Uno",
    rating: null,
    category: "Cards"
  }
]

function App() {
  return (
    <div>
      <h1>React Portfolio Project</h1>
      { gameList.map( g => <GameCard game={g} />) }
    </div>
  );
}

export default App;
