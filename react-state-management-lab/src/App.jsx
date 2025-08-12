import React, { useState } from "react"
import './App.css'

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);

  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ])
  const totalStrength = team.reduce((sum, member) => sum + member.strength, 0)
  const totalAgility = team.reduce((sum, member) => sum + member.agility, 0)


  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log("Not enough money")
      return
    }
    setTeam([...team, fighter])
    setMoney(money - fighter.price)
    const prevFighters = zombieFighters.filter(fighterObj => fighterObj.id !== fighter.id)
    setZombieFighters([...prevFighters])
  }

  const handleRemoveFighter = (fighter) => {
    const updatedTeam = team.filter(member => member.id !== fighter.id)
    setTeam(updatedTeam)
    setZombieFighters([...zombieFighters, fighter])
    setMoney(money + fighter.price)
  }

  return (
    <>
      <h2>Team:</h2>
      <p>Money: {money}</p>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>
      <ul>

        {team.length === 0 ? "Pick some team members!" : team.map(member => (

          <li>
            <img src={member.img} alt={name} />
            <div key={member.id}>{member.name}</div>
            <p><span>price: </span>{member.price}</p>
            <p><span>strength: </span>{member.strength}</p>
            <p><span>agility: </span>{member.agility}</p>
            <button onClick={() => handleRemoveFighter(member)}>Remove</button>
          </li>
        ))
        }
      </ul>



      <h2>Fighters:</h2>
      <ul>
        {zombieFighters.map((zombieFighter) => (
          <li key={zombieFighter.id}>
            <img src={zombieFighter.img} alt={name} />
            <div key={zombieFighter.id}>{zombieFighter.name}</div>
            <p><span>price: </span>{zombieFighter.price}</p>
            <p><span>strength: </span>{zombieFighter.strength}</p>
            <p><span>agility: </span>{zombieFighter.agility}</p>
            <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App