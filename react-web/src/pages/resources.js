import React from 'react';
import Resource from '../components/resource';

class Resources extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
           <div>
           {
               this.props.use.notes.map(note=>{
                if(note.is_approved==true)
                return <Resource name={note.title} resource={note.pdf} />
                
           })
                
           }
           </div>
        );
    }
}

export default Resources;
