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
                <Post post_id='1' post='Hola Amigos' user_id='Aditya Thakur' timestamp='Nov 8,2020' image='https://live.staticflickr.com/106/299768558_02779187fe_b.jpg' votes='12' />
            </>
        );
    }
}

export default DashboardFeed;