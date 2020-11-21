import React from 'react';
import Grid from '@material-ui/core/Grid';
import Post from '../components/post'
import Disqus from "disqus-react";

class Profile extends React.Component {

    constructor(props){
        super();
        this.props = props;
        this.state = {}
    }
   
   
    render(){
        const disqusShortname = "the-unillege"
        const disqusConfig = {
          url: "http://localhost:8000/profile",
          identifier: "Discuss With peers",
          title: "Collaborate with your peers and shape your future!!!"
        }    
        
        return(
            <div className="article-container">

            <h1>Discuss With Peers Here!</h1>

            <p>Collaborate with your peers and shape your future!!!</p>

            <Disqus.DiscussionEmbed
             shortname={disqusShortname}
            config={disqusConfig}
        />
      </div>
        );
    };
}

export default Profile;
