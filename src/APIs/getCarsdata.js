import axios from "axios"
const carsAPI = 'https://myfakeapi.com/api/cars/'
let data = null 
export const getCarsdata = async () => {

    await axios.get(`${carsAPI}`)
    .then(res=>{
        console.log(res.data)
        data = res.data.cars
    })
    .catch(err=>{
            console.log(err)

    })

    return data 

}