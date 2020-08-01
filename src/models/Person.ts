import * as t from 'io-ts';
import {String50Codec} from "../base/String50";
import {EmailAndPostalCodeCodec} from "../base/EmailAndPostalCode";
import {EmailCodec} from "../base/Email";
import {PostalCodeCodec} from "../base/PostalCode";

export const ContactInfoCodec = t.union([
    EmailCodec,
    PostalCodeCodec,
    EmailAndPostalCodeCodec,
], 'ContactInfo')

export const PersonCodec = t.type({
    firstName: String50Codec,
    lastName: String50Codec,
    contactInfo: ContactInfoCodec,
}, 'Person');

export type Person = t.TypeOf<typeof PersonCodec>