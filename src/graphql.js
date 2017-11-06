import { GraphQLString, GraphQLObjectType, GraphQLID, GraphQLList, GraphQLSchema } from 'graphql';

import db from './people';

const Person = new GraphQLObjectType({
    name: 'Person',
    description: 'A Person',
    fields: () => ({
        name: {
            type: GraphQLString,
        },
        photo: {
            type: GraphQLString,
        },
        profile: {
            type: GraphQLString,
        },
        id: {
            type: GraphQLID,
        },
        friends: {
            type: new GraphQLList(Person),
            resolve(root) {
                return root.friends.map(id => db[id]);
            }
        },
    }),
});

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        attendees: {
            resolve() {
                return Object.keys(db).map(id => db[id]);
            },
            type: new GraphQLList(Person),
        },
        person: {
            type: Person,
            args: {
                name: {
                    type: GraphQLString,
                    description: 'a string to search for',
                },
                id: {
                    type: GraphQLID,
                    description: 'The id',
                }
            },
            resolve(root, args) {
                if (args.name) {
                    const reg = new RegExp(args.name);

                    return Object.keys(db).find(p => db[p].name.match(reg));
                }
                if (args.id) {
                    return db[args.id];
                }
            }
        }
    }
});

export default new GraphQLSchema({
    query: RootQueryType,
});
