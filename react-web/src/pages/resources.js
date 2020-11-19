import React from 'react';
import Resource from '../components/resource';

class Resources extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
           <>
                <Resource name='Test Object' resource='Any Random URL' />
           </>
        );
    }
}

export default Resources;
