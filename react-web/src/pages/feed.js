import React from 'react';
import Post from '../components/post';

class DashboardFeed extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <>
            {
                this.props.use.posts.map(post=>(
                    <Post post_id={post.id} post={post.title} user_id={post.author_id} timestamp={post.created_on} image='https://live.staticflickr.com/106/299768558_02779187fe_b.jpg' votes='12' />
                ))
            }
                
            </>
        );
    }
}

export default DashboardFeed;