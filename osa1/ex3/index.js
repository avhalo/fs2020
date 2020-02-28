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
    const part1 = {
      name: 'Basics of React',
      exercises: 8
    }
    const part2 = {
      name: 'Using props',
      exercises: 10
    }
    const part3 = {
      name: 'Component states',
      exercises: 12
    }

  return (
    <div>
        <Header course={course}/>
        <Contents part1={part1.name} exercises1={part1.exercises} 
        part2={part2.name} exercises2={part2.exercises} 
        part3={part3.name} exercise3={part3.exercises} 
        />
        <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises}/>

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)