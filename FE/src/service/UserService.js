import axios from "axios"

export const loginUser = async (data)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/sign-in`,data)
    // console.log('res', res.data)
    return res.data
}

export const signupUser = async (data)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/sign-up`,data)
    // console.log('res', res.data)
    return res.data
} 

export const getDetailsUser = async (id, access_token)=>{
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/user/get-details/${id}`,{
        headers: {
            token: `Beare ${access_token}`,
        }
    })
    // console.log('res', res.data)
    return res.data
} 