import React, { Component } from 'react';
import { lang, Youtube_key, Youtub_url } from '../../../config';
import FontAwesome from 'react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb';
import './YouTube.css'

class YouTube extends React.Component {
    
    constructor(props) {
        super(props);
       
    }
    state = {
        id: ""
    };
   /* componentDidMount() {
        const endpoint = `${Youtub_url}search?part=id&q=${this.props.name}&type=video&key=${Youtube_key}`;
        //const endpoint = `${Youtub_url}search?part=id&q=Captain Marvel&type=video&key=${Youtube_key}`;
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    id: result.items[0].id.videoId
                })

            })
    }
*/

    link() {
        //this.componentDidMount(`${Youtub_url}search?part=id&q=${this.state.name}&type=video&key=${Youtube_key}`);
      /*  return ("https://www.youtube.com/embed/" +
            this.state.id + "?autoplay=0&rel=0&modestbranding=1")
    }*/
    return("https://www.youtube.com/embed/mYFaghHyMKc?autoplay=0&rel=0&modestbranding=1")
}
    id = this.link();
    // const videoSrc="https://www.youtube.com/embed/mYFaghHyMKc?autoplay=0&rel=0&modestbranding=1";
    render() {

        return (<div className="container">
            <iframe className="player" type="text/html" width="100%" height="100%"
                src={this.link()}
                frameborder="0" />
        </div>)

    };

}

export default YouTube;

