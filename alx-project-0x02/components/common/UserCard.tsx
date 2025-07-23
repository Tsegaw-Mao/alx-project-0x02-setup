import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
    return (
        <>
            <div className="flex flex-col border rounded-2xl gap-5 my-5 p-5 divide-y bg-white mx-30 text-black">
                <div className="flex flex-row border divide-x gap-5">
                    <div className="basis-1/6"><strong>ID: </strong>{id}</div>
                    <div className="basis-2/6"> <strong>Full Name: </strong> {name}</div>
                    <div className="basis-3/6"><strong>User Name: </strong>{username}</div>
                </div>
                <div className="flex"><strong>Email:  </strong>{ email}</div>
                <div className="flex flex-row  divide-x  gap-5">
                    <div className="basis-1/6"><strong>Street: </strong>{address.street}</div>
                    <div className="basis-1/6"><strong>Suite: </strong>{address.suite}</div>
                    <div className="basis-1/6"><strong>City: </strong>{address.city}</div>
                    <div className="basis-1/6"><strong>Zipcode: </strong>{address.zipcode}</div>
                    <div className="basis-1/6"><strong>Latitude: </strong>{address.geo.lat}</div>
                    <div className="basis-1/6"><strong>Longtude: </strong>{address.geo.lng}</div>
                </div>
                <div className="flex flex-row divide-x gap-5">
                    <div className="basis-1/2"><strong>Phone Number: </strong>{phone}</div>
                    <div className="basis-1/2"><strong>Website: </strong>{website}</div>
                </div>
                <div className="flex flex-row divide-x gap-5">
                    <div className="basis-1/5"><strong>Company Name: </strong>{company.name}</div>
                    <div className="basis-2/5"><strong>Company CatchPhrase: </strong>{company.catchPhrase}</div>
                    <div className="basis-2/5"><strong>Company BS.: </strong>{company.bs}</div>
                </div>
            </div>
        </>
    )
}

export default UserCard