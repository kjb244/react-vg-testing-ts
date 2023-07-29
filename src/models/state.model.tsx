export interface StateModel {
    routesVisited: string[];
    currRoute: string | null ;
    routeMapping: Record<string, NextPrev>
}

export interface NextPrev {
    next: string | null;
    prev: string | null;
}