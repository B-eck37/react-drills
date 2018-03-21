import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { toast } from 'react-toastify'

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: [],
            id: 0,
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/people').then(response => {
            let array = response.data.results;
            console.log('array', array)
            for(let i =0; i < 10; i++){
                let id = array[i].url.substr(array[i].url.lastIndexOf('/') - 2).replace('/', '').replace('/','');
                console.log(id)
                array[i].id = id
                this.setState({
                    people: [...this.state.people, array[i]],
                })
                console.log(this.state.people)
            }
        })
    }

    render() {
        let { people } = this.state;
        return (
            <div>
                Star Wars Characters:
                {people.map((elem, index) => {
                    return (
                    <div key={index}>
                        {/* <h1>{elem.name}</h1> */}
                        <Link to={`/details/${elem.id}`} >{elem.name}</Link>
                    </div>
                    )
                    })
                }
            </div>
        )
    }
}


export default withRouter(Products)
