import {createContext} from "react";
import {EnvironmentTypeContext} from "../models/state.model";

export const EnvironmentContext = createContext<EnvironmentTypeContext>({
    environmentProperties: {
        isInternal: null,
        type: null
    },
    setEnvironmentProperties: () => null

});