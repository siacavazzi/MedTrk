
export default function Header({user, setUser}) {

    return (
        <div>
            {user ? <p> Welcome {user.name}!</p>: <p>Please sign in</p>}
        </div>
    )
}