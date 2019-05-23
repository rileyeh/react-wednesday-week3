import React, { Component } from 'react'

export default class Display extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let mappedData = this.props.data.filter((item, i) => {
            return item.id === this.props.number
        })
        .map((person, i) => {
            return (
                <div key={i} className="display">
                <h1 className="counter">{this.props.number}/25</h1>
                <h1 className="display-name">{`${person.name.first} ${person.name.last}`}</h1>
                <div className="basic-info">
                    <p><span>From:</span> {`${person.city}, ${person.country}`}</p>
                    <p><span>Job Title:</span> {person.title}</p>
                    <p><span>Employer:</span> {person.employer}</p>
                    <br />
                    <div className="movies">
                        <span> Favorite Movies: </span>
                            <p>1. {person.favoriteMovies[0]} </p>
                            <p>2. {person.favoriteMovies[1]} </p>
                            <p>3. {person.favoriteMovies[2]} </p>
                    </div>
                </div>
            </div>
            )
        })
        return (
            <div>
                {mappedData}
            </div>
        )
    } 
}