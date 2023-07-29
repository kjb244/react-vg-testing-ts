export interface ActionModel {
    type: ActionType;
    values?: {
        move?: MoveValues
    }

}


export enum ActionType {
    SPLASH_AJAX_COMPLETE ='SPLASH_AJAX_COMPLETE',
    MOVE_ROUTE = 'MOVE_ROUTE',
}

export enum MoveValues {
    FORWARD = 'FORWARD',
    BACK = 'BACK'
}