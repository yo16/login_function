
export class UserDataSource {
    constructor(options) {
        // initialize db connection etc...
    }

    async getUser(id) {
        users_data.forEach((user)=>{
            if (user.id===id) {
                return user;
            }
        })
        return null;
    }

    async getUsers() {
        return users_data;
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
