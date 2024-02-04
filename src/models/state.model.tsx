export type StateTypeContext = {
    coreData: CoreData,
    setCoreData: (coreData: CoreData) => void;
}

export interface CoreData  {
    routesVisited: string[] | null;
    currRoute: string | null;
    routeMapping: Record<string, NextPrev>;
    ajaxData: {
        bpm: Record<string,string>;
        name: string[];
    },
    cartData: Product[]

}

export interface NextPrev {
    next: string | null;
    prev: string | null;
}


export interface Product {
    product: string;
    inCart: boolean;
}