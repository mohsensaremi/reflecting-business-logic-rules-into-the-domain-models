import {PersonCodec} from "./models/Person";
import {isRight} from "fp-ts/lib/Either";
import {PathReporter} from "io-ts/lib/PathReporter";

const main = () => {
    createAndLogPerson("person1", {
        firstName: "pf1",
        lastName: "pl1",
        contactInfo: "p1@gmail.com",
    });

    createAndLogPerson("person2", {
        firstName: "pf2",
        lastName: "pl2",
        contactInfo: "3456234501",
    },);

    createAndLogPerson("person3", {
        firstName: "pf3",
        lastName: "pl3",
        contactInfo: {
            email: "p1@gmail.com",
            postalCode: "5467594032",
        },
    });

    createAndLogPerson("person4", {
        firstName: "pf4",
        lastName: "pl4",
    });

    createAndLogPerson("person5", {
        firstName: "pf5",
        lastName: "pl5",
        contactInfo: "wrongEmail",
    });
}

const createAndLogPerson = (label: string, data: any) => {
    const personEither = PersonCodec.decode(data);
    if (isRight(personEither)) {
        const person = personEither.right;
        console.log(`${label}`, person);
        console.log(`${label} encoded`, PersonCodec.encode(person));
        console.log("\n\n");
    } else {
        const report = PathReporter.report(personEither);
        console.error(`ERROR ${label}: ${report}`);
        console.log("\n\n");
    }
}

main();