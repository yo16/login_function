
export class UserDataSource {
    constructor(options) {
        // initialize db connection etc...
    }

    async getUser(name, password) {
        let found_user = null;
        users_data.forEach((user)=>{
            if (user.name===name && user.password===password) {
                found_user = user;
            }
        })
        return found_user;
    }

    async getUsers() {
        return users_data;
    }

    async addUser(name, email, password) {
        const new_user = {
            id: users_data.length+1,
            name,
            email,
            password,
        };
        users_data.push(new_user);
        return new_user;
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
