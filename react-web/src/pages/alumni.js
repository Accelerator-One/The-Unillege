import React from 'react';
import Story from '../components/story';
import Grid from '@material-ui/core/Grid';

class Alumni extends React.Component {

    render(){
        return (
            <Grid container spacing={4} style={{ 'padding':'10px' }}>
            {
                this.props.use.alumni.map(alum=>(
                    <Story spacing={4} story_id='1' story={alum.story} alumni='Shubham Luthra' company={alum.company} timestamp='2022' image={alum.image}/>
                ))                
            }
            </Grid>
        );
    }
}

export default Alumni;