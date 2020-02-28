import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
            <h1>{props.course}</h1>
    )
}
const Part = (props) => {
    return (
        <p>{props.part} {props.exercises}</p>
    )
} 
const Contents = (props) => {
    return (
        <div>
        <Part part={props.part1} exercises={props.exercises1}/>
        <Part part={props.part2} exercises={props.exercises2}/>
        <Part part={props.part3} exercises={props.exercises3}/>
        <p>{props.part} {props.exercises}</p>
        </div>
    )
}
const Total = (props) => {
    
    return (
        <p>Total {props.e1 +props.e2 + props.e3} exercises</p>
    ) 
}

const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const part1 = 'Basics of React'
  const exercises1 = 8
  const part2 = 'Using props'
  const exercises2 = 10
  const part3 = 'Component states'
  const exercises3 = 12

  return (
    <div>
        <Header course={course}/>
        <Contents part1={part1} exercises1={exercises1} 
        part2={part2} exercises2={exercises2}
         part3={part3} exercises3={exercises3}/>
        <Total e1={exercises1} e2={exercises2} e3={exercises3}/>

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)