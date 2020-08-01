import * as t from 'io-ts';

export type String50 = {
    kind: "String50",
    value: string,
}

export const String50Codec = new t.Type<String50, string>(
    'String50',
    (u): u is String50 => u && (u as any).kind === "String50" && typeof (u as any).value === "string",
    (u, c) => typeof u === "string" && u.length <= 50 ? t.success({kind: "String50", value: u}) : t.failure(u, c),
    (c) => c.value,
);