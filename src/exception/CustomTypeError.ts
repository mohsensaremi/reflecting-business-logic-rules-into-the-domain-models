export class CustomTypeError extends Error {
    constructor(type: string, value: any) {
        super(`invalid value ${JSON.stringify(value)} provided for type ${type}`);
    }
}