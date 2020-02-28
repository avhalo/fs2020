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
        <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
        <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
        <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
        <p>{props.part} {props.exercises}</p>
        </div>
    )
}
const Total = (props) => {
    
    return (
        <p>Total {props.parts[0].exercises +props.parts[1].exercises + props.parts[2].exercises} exercises</p>
    ) 
}

const App = () => {
    const course = 'Superadvanced web and mobile programming'
    const parts = [
        {
          name: 'Basics of React',
          exercises: 8
        },
        {
          name: 'Using props',
          exercises: 10
        },
        {
          name: 'Component states',
          exercises: 12
        }
      ]

  return (
    <div>
        <Header course={course}/>
        <Contents parts={parts} />
        <Total parts={parts}/>

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)