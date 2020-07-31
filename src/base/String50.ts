import {CustomTypeError} from "../exception/CustomTypeError";

export type String50 = {
    kind: "String50",
    value: string,
}

export const makeString50 = (arg: any): String50 => {
    if (typeof arg === "string" && arg.length <= 50) {
        return {
            kind: "String50",
            value: arg,
        };
    }
    throw new CustomTypeError("String50", arg);
}