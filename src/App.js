import { useState } from 'react'
import './App.css'

const cardImages = [
  { "src": "/img/1.jpg"},
  { "src": "/img/2.jpg"},
  { "src": "/img/3.jpg"},
  { "src": "/img/4.jpg"},
  { "src": "/img/5.jpg"},
  { "src": "/img/6.jpg"}
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

      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src="/img/cover.jpg" alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App