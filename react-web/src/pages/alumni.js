import React from 'react';
import Story from '../components/story';

class Alumni extends React.Component {

    

    render(){
        return (
            <div>
            {
                this.props.use.alumni.map(alum=>(
                    <Story story_id='1' story={alum.story} alumni='Shubham Luthra' company={alum.company} timestamp='2022' image={alum.image} votes='121'/>
                ))
                
            }
            </div>
        );
    }
}

export default Alumni;