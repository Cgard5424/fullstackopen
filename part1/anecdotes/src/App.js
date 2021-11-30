import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(() => Array(anecdotes.length).fill(0))
  const title = 'Anecdote of the day';
  const mostVotesText = 'Anecdote with most votes'


  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function getMaxVotesIndex(voteArray) {
    const maxVal = Math.max.apply(null, voteArray)
    const index = voteArray.indexOf(maxVal)
    return index
  }

  const nextClick = () => {
    setSelected(randomInt(0, anecdotes.length - 1));
  }

  const voteIncrease = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy);
  }

  return (
    <div>
      <Title title={title}/>
      {anecdotes[selected]}<br/>
      <Votes selected={selected} votes={votes}/>
      <Button handleClick={voteIncrease} text='vote' />
      <Button handleClick={nextClick} text='next anecdote' />
      <MostVotes mostVotesText={mostVotesText} voteIndex={getMaxVotesIndex(votes)} anecdotes={anecdotes}/>
    </div>
  )
}

const Title = (props) => {
  return(
    <h1>
      {props.title}
    </h1>
  )
}

const MostVotes = (props) => {
  return(
    
    <div>
      <h1>{props.mostVotesText}</h1>
      {props.anecdotes[props.voteIndex]}
      </div>
  )
}

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Votes = (props) => {
  return (
    <div>
      has {props.votes[props.selected]} votes
    </div>
  )
}

export default App