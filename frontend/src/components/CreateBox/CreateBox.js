import React, { useState } from 'react';
import API from '../../utils/API';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../utils/UserAtom.js';

function CreateBox() {

    const user = useRecoilValue(userAtom)
    const [ boxName, setBoxName ] = useState('');
    const [ plantType, setPlantType ] = useState('');
    
    const submitBox = (event) => {
        event.preventDefault();
        const newBox = {
            boxName: boxName,
            plantType: plantType,
            userId: user.id
        }
        let freshie = API.create('box', newBox);
        console.log('freshie', freshie);
    }

    return (
        <>
            <p>Welcome to SennaBox. Lets get your box set up.</p>
            <form>
                <label>Box Name:</label>
                <input
                    type="text"
                    name="boxName"
                    value={boxName}
                    onChange={(e) => setBoxName(e.target.value)}
                ></input>
                <label>Plant Type:</label>
                <input
                    type="text"
                    name="plantType"
                    value={plantType}
                    onChange={(e) => setPlantType(e.target.value)}
                ></input>
                <button 
                    onClick={submitBox}
                >
                    Create Box
                </button>
            </form>
        </>
    )
}

export default CreateBox
