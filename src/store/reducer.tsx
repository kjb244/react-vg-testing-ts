import React, { Component } from 'react';
import {StateModel} from "../models/state.model";
import {ActionModel, AddDeleteCartValues, MoveValues} from "../models/action.model";
import {CartModel} from "../models/cart.model";

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
        },
        cartData: [
            {
                product: 'blueberries',
                inCart: false
            },
            {
                product: 'cabbage',
                inCart: false
            }
        ]
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
            case 'ADD_DELETE_CART':
                const isAdd = action?.values?.addDeleteCart?.type === AddDeleteCartValues.ADD;
                const product = action?.values?.addDeleteCart?.product;
                newState = {
                    ...newState,
                    cartData: newState.cartData.map((value: CartModel) =>{
                        if(value.product === product){
                            value.inCart = isAdd;
                        }
                        return value;
                    })
                }


                break;
        }

        return newState;


    };




}

const clazz = new Reducer();

export default clazz.reducer;