
import React, { Component } from 'react';
import Movie from './movie';
import axios from 'axios';

class Movie_container extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            movies : []
        }
    }
    componentWillMount(){
        const iTuneUrl = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

        axios.get(iTuneUrl)
        .then((response)=> {
            console.log('Results', response)

            this.setState({
                movies : response.data.feed.entry
            });
        });
    }

    render(){
        console.log('The state is:  ', this.state)
        const movieList = this.state.movies.map((movie, index)=> {
            return <Movie info = { movie } key = { index }/>
        });

        return(
            <div>
                { movieList }
            </div>
        )
    }
}

export default Movie_container;