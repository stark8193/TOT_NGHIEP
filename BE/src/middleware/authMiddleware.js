const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const authMiddleWare = (req, res, next)=>{
    // console.log('check:', req.headers.token)
    const token = req.headers.token.split(' ')[1]
    // const token = req.headers.token
    jwt.verify(token, process.env.ACCESS_TOKEN , function(err, user) {
        if(err){
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERR'
            })
        }
        // const {payload} = user
        // console.log('payload', user.id)
        // console.log(user)  
        if(user?.isAdmin){ 
            next()
        }
        else{
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERR'
            })
        }
    });
}

const authUserMiddleWare = (req, res, next)=>{
    // console.log('check', req.headers.token)
    const token = req.headers.token.split(' ')[1]
    const userID = req.params.id;
    jwt.verify(token, process.env.ACCESS_TOKEN , function(err, user) {
        if(err){
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERR'
            })
        }
        // const {payload} = user
        // console.log('user', user)
        // console.log(payload.id)  
        if(user?.isAdmin || user?.id === userID){
            next()
        }
        else{
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERR'
            })
        }
    });
}

module.exports={
    authMiddleWare,
    authUserMiddleWare
}