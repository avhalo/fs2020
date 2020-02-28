import React from 'react'
import ReactDOM from 'react-dom'
const Button = (props) => {
    const {onC, text} = props
    return (
        <button onClick={onC}>{text}</button>
    )
}
const Feedback = (props) => {
    const {pos,neut,neg} = props
    return (
    <div>
        <h1>anna palautetta</h1>
        <Button onC={pos} text="hyvä"/>
        <Button onC={neut} text="neutraali"/>
        <Button onC={neg} text="huono"/>
    </div>
)
}
const Statistic = (props) =>{  
    const {value, text} = props
    return(
    <tr>
        <td>{text} </td>
        <td>{value}</td>
    </tr>
    )
}
const Statistics  = (props) => {
    const {pos,neut,neg} = props
    const total = pos + neut + neg
    if (total === 0){
        return(
            <div>
                <h1>statistiikka</h1>
                <p>ei yhtään palautetta annettu</p>
            </div>
        )
    }
    return(
    <div> 
        <h1>statistiikka</h1>
        <tbody>
            <tr>
                <td>Hyvä</td>
                <td>{pos}</td>
            </tr>
            <tr>
                <td>Neutraali</td>
                <td>{neut}</td>
            </tr>
            <tr>
                <td>Huono</td>
                <td>{neg}</td>
            </tr>
            <Statistic value={(pos/total+-1*neg/total).toFixed(1)} text="keskiarvo"/>
            <Statistic value={(pos/total*100).toFixed(1)+" %"} text="positiivisia "/>
        </tbody> 
      
    </div>
    )
}
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pos: 0,
            neut: 0,
            neg: 0,
        }
    }

    addpos(e) {
        this.setState({pos: this.state.pos +1})
    }
    addneut(e){
        this.setState({neut: this.state.neut +1})
    }
    addneg(e){
        this.setState({neg: this.state.neg +1})
    }
    render (){
        return (
            <div>
             {/*Components button and Statistic are in their respective components*/}
            <Feedback pos={this.addpos.bind(this)}
             neut={this.addneut.bind(this)} 
             neg={this.addneg.bind(this)}/>
            <Statistics pos={this.state.pos} neut = {this.state.neut} neg = {this.state.neg}/>
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)