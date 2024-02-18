export type EnvironmentTypeContext = {
    environmentProperties: EnvironmentProperties,
    setEnvironmentProperties: (environmentProperties: EnvironmentProperties) => void
}

export interface EnvironmentProperties {
    isInternal: boolean | null,
    type: EnvironmentType | null
}

export enum EnvironmentType {
    LOCAL = 'LOCAL',
    DEV = 'DEV',
    PROD = 'PROD'
}

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