import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            gender: '',
            height: '',
            hairColor: '',
            eyeColor: '',
        }
        this.getCharacter = this.getCharacter.bind(this)
    }

    componentDidMount(){
        this.getCharacter();
    }

    getCharacter(){
        console.log(this.props)
        let id = this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1)
        // console.log(id)
        axios.get(`https://swapi.co/api/people/${id}`).then(response => {
            let person = response.data
            console.log(response.data)
            this.setState({
                name: person.name,
                gender: person.gender,
                height: person.height,
                hairColor: person.hair_color,
                eyeColor: person.eye_color
            })
        })

    }

    render() {
        // const name = this.state.name;
        const {name, gender, height, hairColor, eyeColor} = this.state;
        return (
            <div>
                <Link style={{fontSize: '12pt'}} to='/'>Home</Link>
                <h1>Name: {name}</h1>
                <h2>Gender: {gender}</h2>
                <h2>Height: {height}</h2>
                <h2>Hair Color: {hairColor}</h2>
                <h2>Eye Color: {eyeColor}</h2>
            </div>
        )
    }
}


export default Details
