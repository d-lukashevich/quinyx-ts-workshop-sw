import React, { useState } from "react";
import "./App.css";
import { Select } from "./Select";
import { useCharacters } from "./useCharacters";

const SIDES = Object.freeze({
  DARK: "Dark",
  LIGHT: "Light",
});

const sidesList = Object.values(SIDES).map((side) => ({
  label: side,
  value: side,
}));

function App() {
  const [characterId, setCharacterId] = useState();
  const [side, setSide] = useState(SIDES.LIGHT);

  const [charactersList, status] = useCharacters();

  if (!status) return null;

  return (
    <>
      <div
        className="poster"
        style={{ backgroundImage: `url("img/${side}/${characterId}.png"` }}
      />
      <div className="controls">
        <div className="container">
          <p>
            *Images of characters with reversed force side done by{" "}
            <a
              href="https://www.midjourney.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Midjourney
            </a>
            . Not always accurate, but fascinating
          </p>
          <Select
            value={characterId}
            onChange={(value) => setCharacterId(value)}
            options={charactersList.map((char) => ({
              label: char.name,
              value: char.id,
            }))}
          />
          <Select
            value={side}
            options={sidesList}
            onChange={(newSide) => setSide(newSide)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
