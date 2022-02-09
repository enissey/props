import React from 'react'
import PropTypes from 'prop-types';

const Profile = props => {
    const styleOb={color :"gray",textDecoration:"Double"}
    return (
        <div style={styleOb}>
            {props.children}
            <h1>{props.FullName}</h1>
            <button onClick={()=>props.handleName(props.FullName)}>ok</button>
    </div>
    );
   };
   Profile.propTypes = {
    anyProp: PropTypes.any,
    booleanProp: PropTypes.bool,
    numberProp: PropTypes.number,
    stringProp: PropTypes.string,
    functionProp: PropTypes.func
   };

   Profile.defaultProps={
       FullName:"Foulen",
       Bio :"N/A",
       Profession:"batal"
   }
   

export default Profile