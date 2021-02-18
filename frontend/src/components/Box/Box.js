import React from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import { userAtom } from '../../utils/UserAtom.js';

function Box(props) {

    console.log('props', props)
    
    // const user = useRecoilValue(userAtom)

    return (
        <div className="box-wrapper">
            {props.name}
        </div>
    )
}

Box.propTypes = {
    name: PropTypes.string
};

export default Box
