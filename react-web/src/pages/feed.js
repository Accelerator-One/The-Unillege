import React from 'react';
import Grid from '@material-ui/core/Grid';
import Post from '../components/post';

class DashboardFeed extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
           
            <Grid container spacing={4} style={{ 'padding':'10px' }}>
            {
            
                this.props.use.posts.map(post=>{
                    if(post.is_approved==true)
                    return <Post spacing={4} key={post.id} title={post.title} post={post.content} user_id={post.author_name_id} timestamp={ new Date(post.created_on).toDateString()} image={post.image} votes='12' />
                    
                })
            }
            </Grid>
          
            
        );
    }
}

export default DashboardFeed;