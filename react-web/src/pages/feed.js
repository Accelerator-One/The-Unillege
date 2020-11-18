import React from 'react';
import Post from '../components/post';
import Grid from '@material-ui/core/Grid';

class DashboardFeed extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
           
            <Grid container spacing={4} style={{ 'padding':'10px' }}>
            {
                
                this.props.use.posts.map(post=>(
                    
                    <Post spacing={4} key={post.id} post={post.title} user_id={post.author_id} timestamp={post.created_on} image={post.image} votes='12' />
                    
                ))
            }
            </Grid>
          
            
        );
    }
}

export default DashboardFeed;