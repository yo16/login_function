export const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            const response
                = await context.dataSources.userApi.getUser(
                    args.name, args.password
                );
            return response;
        },
        users: async (parent, args, context) => {
            const response = await context.dataSources.userApi.getUsers();
            return response;
        },
    },
    Mutation: {
        addUser: async (parent, args, context) => {
            const response
                = await context.dataSources.userApi.addUser(
                    args.name, args.email, args.password
                );
            return response;
        },
    },
};

