import {makeString50, String50} from "../base/String50";
import {Email, makeEmail} from "../base/Email";
import {makePostalCode, PostalCode} from "../base/PostalCode";
import {EmailAndPostalCode, makeEmailAndPostalCode} from "../base/EmailAndPostalCode";
import {CustomTypeError} from "../exception/CustomTypeError";

export type Person = {
    firstName: String50,
    lastName: String50,
    contactInfo: ContactInfo,
}
export type ContactInfo =
    | Email
    | PostalCode
    | EmailAndPostalCode


export const makeContactInfo = (arg: any): ContactInfo => {
    try {
        return makeEmail(arg);
    } catch (e) {
        try {
            return makePostalCode(arg);
        } catch (e) {
            return makeEmailAndPostalCode(arg);
        }
    }
}

export const makePerson = (arg: any): Person => {
    if (arg) {
        return {
            firstName: makeString50(arg.firstName),
            lastName: makeString50(arg.firstName),
            contactInfo: makeContactInfo(arg.contactInfo),
        };
    }
    throw new CustomTypeError("Person", arg);
}