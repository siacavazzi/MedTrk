import { BASE_URL } from "../constants";

export async function userLoader() {
    const OPTIONS = {
        method: "GET",
        credentials: 'include'
    }
    try {
        console.log("Checking session...");
        const response = await fetch(`${BASE_URL}/check_session`, OPTIONS);
        const user = await response.json();
        if (user.id) {
            console.log("User found...")
            console.log(user)
            return  {user} ;
        } else {
            console.log("No user found")
            return null;
        }
    } catch {
        console.log("Error loading user data")
        return null;
    }
}