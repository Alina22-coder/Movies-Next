import React from 'react';
import {cookies} from "next/headers";
import {UserInfoClient} from "./UserInfoClient";

const UserInfo = async () => {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get('user');
    const user = userCookie ? JSON.parse(userCookie.value) : null;

    if (!user) return null;

    return <UserInfoClient name={user.name}/>;
}

export {UserInfo};
