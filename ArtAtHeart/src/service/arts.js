
export const addArts = async (url,artDetails) => {
    let res=await fetch("http://localhost:27017/" +url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(artDetails),
    });
    let response = await res.text();
    return response;
};
/*
export async function getArtItem(url,artist){
    let res =await fetch("http://localhost:27017/"+url);
    let data=await res.json();
    return data;
}*/

export const update=async(url,artDetails)=>{
    await  fetch("http://localhost:27017/" +url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const getArtItem=async(url,data)=>{
    let res=await fetch("http://localhost:27017/arts/"+url,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            "Content":JSON.stringify(data)
        }
    })
    let response=await res.json();
    console.log(response);
    return response
}

