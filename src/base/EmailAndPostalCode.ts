import * as t from 'io-ts';
import {EmailCodec} from "./Email";
import {PostalCodeCodec} from "./PostalCode";

export const EmailAndPostalCodeCodec = t.type({
    email: EmailCodec,
    postalCode: PostalCodeCodec,
}, 'EmailAndPostalCode');

export type EmailAndPostalCode = t.TypeOf<typeof EmailAndPostalCodeCodec>