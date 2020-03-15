import React, {Component} from 'react'
import Phonebook from './components/Phonebook'
import Add from './components/Add'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            persons: [
                {name: 'Arto Hellas',
                number:'not_specified',
                id: 0
                }
            ],
            newName: '',
            newNumber: ''
        }
    }

    addPerson = (event) => {
        event.preventDefault()
        if(!this.state.persons.some(person => person.name === this.state.newName)){
            const personObj = {
                    name:this.state.newName,
                    number:this.state.newNumber
                }
            this.setState({persons:this.state.persons.concat(personObj)})
     } else {
         alert("Nimi "+ this.state.newName+ " jo luettelossa")
     }
    }
    handleNameChange = (event) => {
        this.setState({newName: event.target.value})
    }
    handleNumChange = (event) => {
        this.setState({newNumber: event.target.value})
    }

    render(){
        return(
         <div>
            <h2>Puhelinluettelo</h2>
            <Add
                submit={this.addPerson}
                namechange={this.handleNameChange}
                numchange={this.handleNumChange}
                nameval={this.state.newName}
                numval={this.state.newNumber}
            />
            <Phonebook 
                persons={this.state.persons}
            />
        </div>
        )
    }
}
export default App