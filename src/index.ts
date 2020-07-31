import {makePerson} from "./models/Person";
import {CustomTypeError} from "./exception/CustomTypeError";

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
    try {
        const person = makePerson(data);
        console.log(label, person);
    } catch (e) {
        if (e instanceof CustomTypeError) {
            console.error(`ERROR ${label}: ${e.message}`);
        } else {
            throw e;
        }
    }
}

main();