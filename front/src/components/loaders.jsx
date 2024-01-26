import { BASE_URL } from "../constants";

export async function getProfile() {
    const OPTIONS = {
        method: "POST",
        credentials: 'include',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    }


    //const resp = await fetch
}