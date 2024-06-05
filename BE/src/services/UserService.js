const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const { genneralAccessToken, genneralRefreshToken } = require('./JwtService')

const createUser = (newUser)=>{
    return new Promise(async (resolve,reject)=>{
        const {name, email, password, confirmPassword, phone} =newUser
        try{
            const checkEmail = await User.findOne({
                email: email
            })
            if(checkEmail !== null){
                resolve({
                    status: "ERR",
                    message: "The email is already"
                })
            }

            const hash = bcrypt.hashSync(password, 10)
            const createUser = await User.create({
                name, 
                email,
                password: hash,
                phone
            })
            if(createUser){
                resolve({
                    status: 'OK',
                    message: 'SUCCESSFULL!',
                    data: createUser
                })
            }      
               
        }
        catch (e){
            reject(e)
        }
    })
}

const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { email, password } = userLogin
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }
            const comparePassword = bcrypt.compareSync(password, checkUser.password)

            if (!comparePassword) {
                resolve({
                    status: 'ERR',
                    message: 'The password or user is incorrect'
                })
            }
            const access_token = await genneralAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })

            const refresh_token = await genneralRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                access_token,
                refresh_token
            })
        } catch (e) {
            reject(e)
        }
    })
}

const updateUser = (id,data) => {
    return new Promise(async (resolve, reject) => {
       
        try {
            const checkUser = await User.findById(id)
            //console.log(checkUser)
            if (checkUser === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }

            const updateUser = await User.findByIdAndUpdate(id,data, {new: true})
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updateUser
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
       
        try {
            const checkUser = await User.findById(id)
            //console.log(checkUser)
            if (checkUser === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }

            await User.findByIdAndDelete(id)
            
            resolve({
                status: 'OK',
                message: 'Delete user SUCCESS',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllUser = () => {
    return new Promise(async (resolve, reject) => {
       
        try {
            const allUser = await User.find()
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: allUser
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsUser = (id) => {
    return new Promise(async (resolve, reject) => {
       
        try {
            const user = await User.findById(id)
            //console.log(user)
            if (user === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: user
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports ={
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailsUser
}