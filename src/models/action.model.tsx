export interface ActionModel {
    type: ActionType;
    values?: {
        move?: MoveValues
        addDeleteCart?: {
            type: AddDeleteCartValues,
            product: string
        }
    }

}


export enum ActionType {
    SPLASH_AJAX_COMPLETE ='SPLASH_AJAX_COMPLETE',
    MOVE_ROUTE = 'MOVE_ROUTE',
    ADD_DELETE_CART = 'ADD_DELETE_CART',
}

export enum MoveValues {
    FORWARD = 'FORWARD',
    BACK = 'BACK'
}

export enum AddDeleteCartValues {
    ADD = 'ADD',
    DELETE = 'DELETE'
}