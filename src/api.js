import axios from "axios"


export default async function GetData(){
    let  response = await axios.get('http://jaweed77-001-site1.gtempurl.com/api/films/2')
    .then(({data}) => {
        return data.values;
    })
    return response;
}

export  async function Get_Img(){
    let response = await axios('https://jsonplaceholder.typicode.com/albums/')
    .then(({data})=>{
        console.log(data);
        return data;
    })
    return response;
}




