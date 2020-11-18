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
            <Grid container spacing={4} style={{ 'padding':'20px' }}>
                <Post post_id='1' post='Hola Amigos' user_id='Aditya Thakur'   spacing={4} timestamp='Nov 8,2020' image='https://live.staticflickr.com/106/299768558_02779187fe_b.jpg' votes='12' />
                <Post post_id='1' post='Hola Amigos' user_id='Aditya Thakur'   spacing={4} timestamp='Nov 8,2020' image='https://live.staticflickr.com/106/299768558_02779187fe_b.jpg' votes='12' />
            </Grid>
        );
    }
}

export default DashboardFeed;