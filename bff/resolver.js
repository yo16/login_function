export const resolvers = {
    Query: {    // [TEMP] 本来はDBに接続
        user: async (parent, args, context) => {
            const response = await context.dataSrouces.userApi.getUser(args.id);
            return response;
        },
        users: async (parent, args, context) => {
            const response = await context.dataSources.userApi.getUsers();
            return response;
        },
    }
}

