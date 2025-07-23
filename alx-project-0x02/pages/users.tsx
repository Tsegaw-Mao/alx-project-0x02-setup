import { UserProps } from "@/interfaces";
import React from "react";
import UserCard from "@/components/common/UserCard";

export interface UserPageProps {
    users: UserProps[]
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    return {
        props: {
            users
        }
    }
}

const Users: React.FC<UserPageProps> = ({ users }) => {
    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-blue-700 text-2xl"> Users Page </h1>
            </div>
            {
                users.map((user) => (
                    <UserCard
                        id = { user.id }
                        name = { user.name }
                        username = { user.username }
                        email = { user.email }
                        address = { user.address }
                        phone = { user.phone }
                        website = { user.website }
                        company = { user.company }
                    />
                ))
            }
        </>
    )
}
export default Users