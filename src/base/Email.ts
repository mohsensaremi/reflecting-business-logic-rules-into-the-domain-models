import {CustomTypeError} from "../exception/CustomTypeError";

export type Email = {
    kind: "Email",
    value: string,
}

export const makeEmail = (arg: any): Email => {
    if (typeof arg === "string" && /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(arg)) {
        return {
            kind: "Email",
            value: arg,
        };
    }
    throw new CustomTypeError("Email", arg);
}