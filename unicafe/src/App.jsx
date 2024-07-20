import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => <tbody><tr><td>{props.text}</td><td>{props.value}</td></tr></tbody>

const Statistics = (props) => {
  console.log(props)
  if (props.all === 0) {
    return (
      <div>
        <h3>No feedback given</h3>
      </div>
    )
  }
    return (
      <table>
          <StatisticLine text='Good' value={props.good}/>
          <StatisticLine text='Neutral' value={props.neutral}/>
          <StatisticLine text='Bad' value={props.bad}/>
          <StatisticLine text='All' value={props.all}/>
          <StatisticLine text='Average' value={props.average}/>
          <StatisticLine text='Positive' value={props.positive + ' %'}/>    
      </table>
    )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    const updatedAll = all + 1 
    setGood(updatedGood)
    setAll(updatedAll)
    setAverage((updatedGood + (bad * -1))/updatedAll)
    setPositive((updatedGood / updatedAll) * 100)
  }
  
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    const updatedAll = all + 1 
    setNeutral(updatedNeutral)
    setAll(updatedAll)
    setAverage((good + (bad * -1))/updatedAll)
    setPositive((good / updatedAll) * 100)
  }
  const handleBad = () => {
    const updatedBad = bad + 1
    const updatedAll = all + 1 
    setBad(updatedBad)
    setAll(updatedAll)
    setAverage((good + (updatedBad * -1))/updatedAll)
    setPositive((good / updatedAll) * 100)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text='Good'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>
      <h3>  Statistics</h3>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App