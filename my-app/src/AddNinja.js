import React, { Component } from 'react'

class AddNinja extends Component{
    state = {
        name: null,
        age: null,
        id: 12
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id ]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="name"> Name</label> 
                <input type='text' id="name" onChange={ this.handleChange}></input>
                <label htmlFor="name"> Age</label> 
                <input type='text' id="age" onChange={this.handleChange }></input>
                <button>Submit</button>

                </form>
            </div>
        )
    }
}


export default AddNinja;