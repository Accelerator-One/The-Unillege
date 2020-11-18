import React from 'react';
import Grid from '@material-ui/core/Grid';
import Post from '../components/post';
import Grid from '@material-ui/core/Grid';

class DashboardFeed extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <Grid container spacing={4} style={{ 'padding':'30px' }}>
            {
                this.props.use.posts.map(post=>(
                    <Post spacing={10} key={post.id} post={post.title} user_id={post.author_id} timestamp={post.created_on} image='https://live.staticflickr.com/106/299768558_02779187fe_b.jpg' votes='12' />
                ))
            }
            </Grid>
        );
    }
}

export default DashboardFeed;