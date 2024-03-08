import { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_USER, LIST_USERS } from "./graphql";


const SignUp = () => {
    const [ newName, setNewName ] = useState("");
    const [ newEmail, setNewEmail ] = useState("");
    const [ newPassword, setNewPassword ] = useState("");

    // キャッシュの更新
    const updateCache = (cache, {data}) => {
        // キャッシュ内のUsersを取得
        const existingUsers = cache.readQuery({
            query:LIST_USERS
        });
        // 今作ったデータを追加
        const newUser = data.addUser;
        cache.writeQuery({
            query: LIST_USERS,
            data: {users: [...existingUsers.users, newUser]},
        });
    };
    // 更新後の入力欄初期化
    const resetInput = () => {
        setNewName("");
        setNewEmail("");
        setNewPassword("");
    };

    // mutationの登録
    const [ addUser, { /*loading, */ error }] = useMutation(
        ADD_USER,
        {
            update: updateCache,
            onCompleted: resetInput,
        }
    );
    if (error) {
        console.log("error!");
        console.log(error.message);
    }

    // 登録ボタン押下
    const handleOnRegisterUser = () => {
        // useMutationで得たaddUser()を呼び出す
        addUser({
            variables: {
                name: newName,
                email: newEmail,
                password: newPassword,
            }
        });
    };

    return (
        <div>
            <h3>Sign upフォーム（登録サンプル）</h3>
            <ul>
                <li>
                    name:
                    <input
                        type="text"
                        value={newName}
                        onChange={(e)=>setNewName(e.target.value)}
                    />
                </li>
                <li>
                    email:
                    <input
                        type="text"
                        value={newEmail}
                        onChange={(e)=>setNewEmail(e.target.value)}
                    />
                </li>
                <li>
                    pass:
                    <input
                        type="text"
                        value={newPassword}
                        onChange={(e)=>setNewPassword(e.target.value)}
                    />
                </li>
            </ul>
            <button
                onClick={handleOnRegisterUser}
            >登録</button>
        </div>
    );
}

export default SignUp;
