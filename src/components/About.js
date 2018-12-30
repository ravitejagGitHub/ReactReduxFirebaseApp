import React from 'react';

const About = (props) => {
    setTimeout(()=>{
        props.history.push('./Home');
    },2000);
    return (
        <div className="about">
            <h1> About : Wait....</h1>
        </div>
    )
}

export default About;