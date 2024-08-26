import { useState } from "react";

const Team = () => {
  const [team, setTeam] = useState(11);
  const handleAddTeam = () => {
    setTeam(team + 1);
  };
  const handleRemoveTeam = () => {
    setTeam(team - 1);
  };

  const teamStyle = {
    border: "1px solid green",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };

  return (
    <div style={teamStyle}>
      <h3>Player: {team}</h3>
      <button onClick={handleAddTeam}>Add</button>
      <button onClick={handleRemoveTeam}>Remove</button>
    </div>
  );
};

export default Team;
