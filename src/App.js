import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="card">
    <h2>Lewis Hamilton</h2>
    <img src="https://a.espncdn.com/i/headshots/rpm/players/full/868.png" alt="Image Description" />
    <input type="checkbox" id="details-toggle" className="details-toggle" />
    <div className="description">
      <label htmlFor="details-toggle" className="details-label">
        Details
      </label>
      <p>
        Lewis Hamilton is a British racing legend, renowned for his exceptional skills in Formula 1. With numerous world championships to his name, he's a trailblazer both on and off the track.
      </p>
    </div>
  </div>

  );
}

export default App;
