import React, {useEffect, useState} from 'react';
import {connect, ConnectedProps} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {StateModel} from "../models/state.model";
import {RouteWorkerModel} from "../models/route-worker.model";



function RouteWorker (props: RouteWorkerModel){
    const navigate = useNavigate();

    useEffect(() => {
        if(props.routesVisited.length && props.currRoute){
            navigate(props.currRoute);
        }
    }, [props.routesVisited.join('')]);
    return (
        <>
        </>
    )
}
const mapStateToProps =(state: StateModel) => {
    return{
        routesVisited: state.routesVisited,
        currRoute: state.currRoute
    }
};

const connector = connect(mapStateToProps);

export type propsFromRedux = ConnectedProps<typeof connector>;


export default connector(RouteWorker);