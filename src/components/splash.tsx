import React, {useEffect, useState} from 'react';
import {Modal, Spinner} from "react-bootstrap";
import {connect, ConnectedProps} from "react-redux";
import {ActionModel, ActionType} from "../models/action.model";
import {Dispatch} from "redux";
import {SplashModel} from "../models/splash.model";


function Splash (props: SplashModel)  {
    const [showModal, setShowModal] = useState(true);
    useEffect(() => {
        setTimeout(() =>{
            setShowModal(false);
            props.splashAjaxComplete();
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


const mapDispatchToProps = (dispatch: Dispatch<ActionModel>) => {
    return {
        splashAjaxComplete: ()=> dispatch({type: ActionType.SPLASH_AJAX_COMPLETE}),


    }
};

const connector = connect(null,mapDispatchToProps)

export type propsFromRedux = ConnectedProps<typeof connector>;



export default connector(Splash);
