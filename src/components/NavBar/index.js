// Write your code here.
// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, score, gameIn} = props
  return (
    <nav className="nav-display-container">
      <div className="nav-bar">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {gameIn && (
          <div className="score-container">
            <p>Score: {score}</p>
            <p>Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
