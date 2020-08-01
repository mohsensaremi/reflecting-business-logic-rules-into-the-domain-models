import * as t from 'io-ts';

export type Email = {
    kind: "Email",
    value: string,
}

const EmailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

export const EmailCodec = new t.Type<Email, string>(
    'Email',
    (u): u is Email => u && (u as any).kind === "Email" && typeof (u as any).value === "string",
    (u, c) => typeof u === "string" && EmailRegex.test(u) ? t.success({kind: "Email", value: u}) : t.failure(u, c),
    (c) => c.value,
);