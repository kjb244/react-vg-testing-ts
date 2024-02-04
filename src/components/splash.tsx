import React, {useContext, useEffect, useState} from 'react';
import {Modal, Spinner} from "react-bootstrap";
import {StateContext} from "../providers/state.context";
import { useNavigate } from 'react-router-dom';



function Splash ()  {
    const [showModal, setShowModal] = useState(true);
    const {coreData, setCoreData} = useContext(StateContext);
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() =>{

            setCoreData({
                ...coreData,
                currRoute: 'view1',
                routesVisited: ['splash', 'view1'],
                ajaxData: {
                    bpm: {
                        case: '123'
                    },
                    name: ['kevin']
                },
                cartData: [...coreData?.cartData || []]
            })
            setShowModal(false);
            navigate('/view1');

        },3000)
    },[]);
    return (
        <>
            <Modal show={showModal}>
                <Modal.Body>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '40px'}}>
                        <Spinner animation="border"></Spinner>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}





export default Splash;
