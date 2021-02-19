import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';


function Box(props) {

    // console.log('props', props)

    const getAge = () => {
        let now = Date.now();
        let init = new Date(props.birth).getTime();
        function timeConversion(millisec) {
            var seconds = (millisec / 1000).toFixed(1);
            var minutes = (millisec / (1000 * 60)).toFixed(1);
            var hours = (millisec / (1000 * 60 * 60)).toFixed(1);
            var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);
            if (seconds < 60) {
                return seconds + " Sec";
            } else if (minutes < 60) {
                return minutes + " Min";
            } else if (hours < 24) {
                return hours + " Hrs";
            } else {
                return days + " Days"
            }
        }
        return timeConversion(now - init)
    }

    useEffect(() => {
        getAge();
    }, [])

    return (
        <div>
            <div className="box-wrapper">
                <div className="container">
                    {/* <p>Box Name:</p> */}
                    <h1>{props.name}</h1>
                </div>
                <div className="container">
                    <p>Plant Type:</p>
                    <p>{props.plantType}</p>
                </div>
                <div className="container">
                    <p>Last watered:</p>
                    <p>{props.lastWatered}</p>
                </div>
                <div className="container">
                    <p>Age:</p>
                    <p>{getAge()}</p>
                </div>
            </div>
        </div>
    )
}

Box.propTypes = {
    name: PropTypes.string,
    plantType: PropTypes.string,
    lastWatered: PropTypes.string,
    birth: PropTypes.string
};

export default Box
