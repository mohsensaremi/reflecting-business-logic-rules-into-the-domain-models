import {Email, makeEmail} from "./Email";
import {makePostalCode, PostalCode} from "./PostalCode";
import {CustomTypeError} from "../exception/CustomTypeError";

export type EmailAndPostalCode = {
    email: Email
    postalCode: PostalCode,
}

export const makeEmailAndPostalCode = (arg: any): EmailAndPostalCode => {
    if (arg) {
        return {
            email: makeEmail(arg.email),
            postalCode: makePostalCode(arg.postalCode),
        };
    }
    throw new CustomTypeError("EmailAndPostalCode", arg);
}