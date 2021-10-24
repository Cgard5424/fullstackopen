import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const appName = 'give feedback';
  const stats = 'statistics';

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <Heading heading={appName} />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Heading heading={stats} />
      <Statistics results={[good, neutral, bad]} />
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

const Heading = (props) => {
  return(
    <h1>
    {props.heading}
  </h1>
  )
  
}

const Statistics = (props) => {
  console.log(props)
  if (props.results.every(item => item === 0)) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  const total = props.results[0] + props.results[1] + props.results[2]
  const avg = (1*props.results[0] + -1*props.results[2]) / total
  const good = props.results[0]
  const neutral = props.results[1]
  const bad = props.results[2]
  const posFloat = 100 * (props.results[0] / total)
  const pos = (parseFloat(posFloat).toFixed(2)+"%")
  return (
    <div>

      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={avg} />
      <StatisticLine text="positive" value={pos} />

    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value}

    </div>
  )
}

export default App




// import React from 'react'
// const Hello = ({name, age}) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - age;
//   }
//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>
//         So you were probably born in {bornYear()};
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter';
//   const age = 10;
//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name="Toots" age={26 + 10}/>
//       <Hello name={name} age={age}/>
//       <Footer />
//     </>
//   )
// }

// const Footer = () => {
//   return (
//     <div>
//       greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
//     </div>
//   )
// }

// export default App