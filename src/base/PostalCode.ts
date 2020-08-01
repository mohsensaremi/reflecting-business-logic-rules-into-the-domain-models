import * as t from 'io-ts';

export type PostalCode = {
    kind: "PostalCode",
    value: string,
}

const PostalCodeRegex = /^[0-9]{10}$/;

export const PostalCodeCodec = new t.Type<PostalCode, string>(
    'PostalCode',
    (u): u is PostalCode => u && (u as any).kind === "PostalCode" && typeof (u as any).value === "string",
    (u, c) => typeof u === "string" && PostalCodeRegex.test(u) ? t.success({kind: "PostalCode", value: u}) : t.failure(u, c),
    (c) => c.value,
);