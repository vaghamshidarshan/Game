import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEdite, setIsEdite] = useState(false);

  function Edite() {
    setIsEdite((editing) => !editing);
    if (isEdite) {
      onChangeName(symbol, playerName);
    }
  }
  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <sapn className="player-name">{playerName}</sapn>;

  if (isEdite) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      ></input>
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <sapn className="player-symbole">{symbol}</sapn>
        <button onClick={Edite}>{isEdite ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
