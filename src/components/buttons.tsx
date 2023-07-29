import {connect, ConnectedProps} from "react-redux";
import React from 'react';
import {Button} from "react-bootstrap";
import {StateModel} from "../models/state.model";
import {Dispatch} from "redux";
import {ActionModel, ActionType, MoveValues} from "../models/action.model";
import {ButtonProps} from "../models/buttons.model";


function disablePrev(props: ButtonProps){
    if((props.routeMapping[props.currRoute || ''] || {}).prev){
        return false;
    }
    return true;
}

function disableNext(props: ButtonProps){
    if((props.routeMapping[props.currRoute || ''] || {}).next){
        return false;
    }
    return true;
}


function Buttons(props: ButtonProps){

    function clickNext(){
        if(props.shouldSubmit() === true){
            props.moveRoute(MoveValues.FORWARD);
        }
    }


    return (
        <>
            <Button disabled={disablePrev(props)} style={{marginRight: '20px'}} variant="primary" >Previous</Button>
            <Button disabled={disableNext(props)} variant="primary" onClick={clickNext}>Next</Button>
        </>

    )
}

const mapStateToProps =(state: StateModel) => {
    return{
        routeMapping: state.routeMapping,
        currRoute: state.currRoute
    }
};

const mapDispatchToProps = (dispatch: Dispatch<ActionModel>) => {
    return {
        moveRoute: (type: MoveValues)=> dispatch({type: ActionType.MOVE_ROUTE, values: {move: type}}),

    }
};

const connector = connect(mapStateToProps, mapDispatchToProps)

export type propsFromRedux = ConnectedProps<typeof connector>;


export default connector(Buttons);