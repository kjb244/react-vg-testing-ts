import {createContext} from "react";
import {StateTypeContext} from "../models/state.model";


export const StateContext = createContext<StateTypeContext>({
    coreData: {
        routesVisited: null,
        currRoute: null,
        routeMapping: {},
        ajaxData: {
            bpm: {},
            name: []
        },
        cartData: []
    },
    setCoreData: () => null

});