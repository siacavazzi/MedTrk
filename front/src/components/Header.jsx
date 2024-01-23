
export default function Header({user, setUser}) {

    function handleSignIn() {
        
    }

    return (
        <div>
            {user ? <p> Welcome {user.name}!</p>: <button onClick={()=>handleSignIn()}>Sign In</button>}

        </div>
    )
}
