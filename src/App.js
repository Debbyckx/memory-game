import { useState } from 'react'
import './App.css'

const cardImages = [
  { "src": "/img/earth.JPG"},
  { "src": "/img/lightning.JPG"},
  { "src": "/img/air.JPG"},
  { "src": "/img/water.JPG"},
  { "src": "/img/fire.JPG"},
  { "src": "/img/cover.JPG"}
]

function App() {
const [cards, setCards] = useState([])
const [turns, setTurns] = useState(0)

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New game</button>
    </div>
  );
}

export default App