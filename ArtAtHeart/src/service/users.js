export const addUser = async (userDetails) => {
    await fetch("http://localhost:27017/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
    });
};

export async function getUsers(url) {
    let res = await fetch("http://localhost:27017/" + url);
    let data = await res.json();
    return data;
}

export async function checkLoginDetails(details) {
    let res = await fetch("http://localhost:27017/users/loginDetails", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(details)
    })
    let response = await res.json();
    console.log("response server",response)
    return response;
}