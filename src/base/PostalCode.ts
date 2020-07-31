import {CustomTypeError} from "../exception/CustomTypeError";

export type PostalCode = {
    kind: "PostalCode",
    value: string,
}

export const makePostalCode = (arg: any): PostalCode => {
    if (typeof arg === "string" && /^[0-9]{10}$/.test(arg)) {
        return {
            kind: "PostalCode",
            value: arg,
        };
    }
    throw new CustomTypeError("PostalCode", arg);
}