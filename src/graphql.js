import { buildSchema, graphql } from 'graphql';

import db from './people';

export const schemaString = `
schema {
    query: RootQueryType
}

# A Profile
type Profile {
    url: String!
    picture: String!
}

# A Person
type Person {
    name: String!
    profile: Profile!
    id: Int!
    friends: [Person]
}

type RootQueryType {
    attendees: [Person]
    person(
        # The id to look for
        id: Int!
    ): Person
    answer: Int!
}`;

const schema = buildSchema(schemaString);

class Profile {
    constructor(data) {
        this.profile = data;
    }
    url() {
        return this.profile.url;
    }
    photo() {
        return this.profile.photo;
    }
};

class Person {
    constructor(data) {
        this.person = data;
    }

    name() {
        return this.person.name;
    }
    profile() {
        return new Profile({
            url: this.person.profile,
            photo: this.person.photo
        });
    }
    id() {
        return this.person.id;
    }
    friends() {
        return this.person.friends.map(id => db[id]);
    }
};

const root = {
    attendees() {
        return Object.keys(db).map(id => new Person(db[id]));
    },
    person(args) {
        return db.hasOwnProperty(args.id) ? db[args.id] : null;
    },
    async answer() {
        const response = await fetch('/secretNumber.txt');
        const secret = await response.text();
        const number = parseInt(secret, 10);

        return number;
    },
};

export default async requestString => graphql(schema, requestString, root);

