import {propsFromRedux} from "../components/buttons";

export interface ButtonProps extends propsFromRedux {
    shouldSubmit: Function
}