import React, {useContext} from 'react';
import {Button} from "react-bootstrap";
import {ButtonProps} from "../models/buttons.model";
import { StateContext} from "../providers/state.context";
import {useNavigate} from "react-router-dom";
import {CoreData} from "../models/state.model";



function disablePrev(coreData: CoreData){
    const currRoute = coreData.currRoute;
    if(!coreData.routeMapping[currRoute || ''].prev){
        return true;
    }
    return false;
}

function disableNext(coreData: CoreData){

    const currRoute = coreData.currRoute;
    if(!coreData.routeMapping[currRoute || ''].next){
        return true;
    }
    return false;
}


function Buttons(props: ButtonProps){
    const {coreData} = useContext(StateContext);
    const navigate = useNavigate();


    function clickNext(){
        if(props.shouldSubmit() === true){
            const currRoute = coreData.currRoute;
            const nextRoute = coreData.routeMapping[currRoute || ''].next || '';
            navigate('/' + nextRoute);


        }
    }


    return (
        <>
            <Button disabled={disablePrev(coreData)} style={{marginRight: '20px'}} variant="primary" >Previous</Button>
            <Button disabled={disableNext(coreData)} variant="primary" onClick={clickNext}>Next</Button>
        </>

    )
}



export default  Buttons;