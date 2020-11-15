import React from 'react';
import Story from '../components/story';

class Alumni extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <>
                <Story story_id='1' story='A Wonderful journey to Amazon where I got to learn from everyone and was able to find my questions to all aspects of life' alumni='Shubham Luthra' company='Amazon' timestamp='2022' image='https://static.india.com/wp-content/uploads/2020/07/Amazon.jpg' votes='121'/>
            </>
        );
    }
}

export default Alumni;