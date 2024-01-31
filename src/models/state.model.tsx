import {CartModel} from "./cart.model";

export interface StateModel {
    routesVisited: string[];
    currRoute: string | null ;
    routeMapping: Record<string, NextPrev>,
    cartData: CartModel[]
}

export interface NextPrev {
    next: string | null;
    prev: string | null;
}

