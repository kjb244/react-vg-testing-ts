export type ErrorMapping = Record<string, string>;

export interface Rule {
    rule: any,
    name: string;
}

export interface ErrorField {
    touched: boolean;
    errors: string[],
    rules: Rule[]
}

export interface ErrorObject {
    firstName: ErrorField,
    lastName: ErrorField,
}

export enum FieldNames {
    firstName= 'firstName',
    lastName = 'lastName'
}

export interface NameValue {
    name: FieldNames;
    value: string;
}