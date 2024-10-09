import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h3>give feedback</h3>
      <Button label={'good'} onClick={() => { setGood(good => good + 1) }} />
      <Button label={'neutral'} onClick={() => { setNeutral(neutral => neutral + 1) }}/>
      <Button label={'bad'} onClick={() => setBad(bad => bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
const Button = ({onClick, label }) => {

  
  return (
    <button onClick={onClick}>{label}</button>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  const all = bad + neutral + good;
  if (all !== 0) {
    return (
      <>
        <table>
          <caption>
            <h3>statistics</h3>
          </caption>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={(good - bad) / all} />
            <StatisticLine text="positive" value={good / all} />
          </tbody>
        </table>

      </>
    )
  } 
  return (
    <>
      <h3>statistics</h3>
      <div>No feedback given</div>
    </>
  )
}
const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
export default App;