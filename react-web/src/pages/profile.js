import React from 'react';
import ProfileView from './profileview';

class Profile extends React.Component {

    constructor(props){
        super();
        this.props = props;
        this.state = {}
    }

    render(){
        return(
            <>
                <ProfileView {...this.props}/>
            </>
        );
    };
}

export default Profile;
