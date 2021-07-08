import React from "react";
import PropTypes from "prop-types";



const Profile_component = ({fullName, bio, profession, handleName, children}) => {
    const styleProfile = {
        color: '#87CEEB', display: 'flex', margin: '40px 60px', justifyItems: 'center', textAlign: 'start'
    }
    const handleAlert = e => {
        handleName(fullName);
    }
   
    return (
        <div style={styleProfile}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center'}}>
                <div>{children}</div>
                <div>
                    <button onClick={handleAlert} style={{width: '100%', height: '30px', border: 'solid 1px', borderBlock: '#87CEEB'}}>
                        Alert
                    </button>
                </div>
            </div>
            <div style={{margin: 'auto'}}>
                <h1>{fullName}</h1>

                <h3>{profession}</h3>

                <h5>{bio}</h5>
            </div>
        </div>
    )
} 

export default Profile_component;

Profile_component.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.string,
    children: PropTypes.string
}