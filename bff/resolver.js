export const resolvers = {
    Query: {    // [TEMP]
        user: (id) => {
            users_data.forEach((user)=>{
                if (user.id===id) {
                    return user;
                }
            })
            return NaN;
        },
        users: () => users,
    }
}


// [TEMP] データをハードコーディング
const users_data = [
    {
        id: 1,
        name: "taro",
        email: "taro@email.com",
        password: "taropass123",
    },
    {
        id: 2,
        name: "jiro",
        email: "jiro@email.com",
        password: "jiropass123",
    },
];

