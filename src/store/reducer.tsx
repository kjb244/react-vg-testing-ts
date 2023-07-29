import React, { Component } from 'react';
import {StateModel} from "../models/state.model";
import {ActionModel, MoveValues} from "../models/action.model";

class Reducer extends Component{
    constructor(props?: any){
        super(props);
    }

    initialState: StateModel = {
        routesVisited: [],
        currRoute: null,
        routeMapping: {
            splash: {
                next: 'view1',
                prev: null
            },
            view1: {
                prev: null,
                next: 'view2'
            }
        }
    }



    reducer = (state=this.initialState, action: ActionModel) => {

        let newState = state;

        switch(action.type) {
            case 'SPLASH_AJAX_COMPLETE':
                newState =  {
                    ...newState,
                    routesVisited: ['splash','view1'],
                    currRoute: 'view1'
                }
                break;
            case 'MOVE_ROUTE':
                const forward = action?.values?.move === MoveValues.FORWARD;
                const routeMapping = newState.routeMapping[newState.currRoute || ''];
                const nextRoute = forward ? routeMapping.next : routeMapping.prev;
                newState = {
                    ...newState,
                    routesVisited: [...newState.routesVisited, nextRoute || ''],
                    currRoute: nextRoute
                }
                break;
        }

        return newState;


    };




}

const clazz = new Reducer();

export default clazz.reducer;