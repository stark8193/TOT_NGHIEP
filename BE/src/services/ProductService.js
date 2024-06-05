const Product = require('../models/ProductModel')
const bcrypt = require('bcrypt')


const createProduct = (newProduct)=>{
    return new Promise(async (resolve,reject)=>{
        const { name, image, type, price, countInStock, rating, description} = newProduct
        try{
            const checkProduct = await Product.findOne({
                name: name
            })
            if(checkProduct !== null){
                resolve({
                    status: "OK",
                    message: "The product is already"
                })
            }

            
            const createProduct = await Product.create({
                name, 
                image, type, price, countInStock, rating, description
            })
            if(createProduct){
                resolve({
                    status: 'OK',
                    message: 'SUCCESSFULL!',
                    data: createProduct
                })
            }      
               
        }
        catch (e){
            reject(e)
        }
    })
}

const updateProduct = (id,data) => {
    return new Promise(async (resolve, reject) => {
       
        try {
            const checkProduct = await Product.findById(id)
            // console.log("checkProduct", checkProduct)
            if (checkProduct === null) {
                resolve({
                    status: 'ERR',
                    message: 'The product is not defined'
                })
            }

            const updateProduct = await Product.findByIdAndUpdate(id,data, {new: true})
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updateProduct
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
       
        try {
            const checkProduct = await Product.findById(id)
            console.log(checkProduct)
            if (checkProduct === null) {
                resolve({
                    status: 'ERR',
                    message: 'The product is not defined'
                })
            }

            await Product.findByIdAndDelete(id)
            
            resolve({
                status: 'OK',
                message: 'Delete product SUCCESS',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsProduct = (id) => {
    return new Promise(async (resolve, reject) => {
       
        try {
            const product = await Product.findById(id)
            //console.log(user)
            if (product === null) {
                resolve({
                    status: 'ERR',
                    message: 'The product is not defined'
                })
            }            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: product
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllProduct = (limit, page ,sort, filter) => {
    console.log('filter', filter)
    return new Promise(async (resolve, reject) => {
       
        try {
            const totalProducts = await Product.countDocuments()
            if(filter){
                const allProductFilter = await Product.find({ [filter[0]]: {'$regex': filter[1]}}).limit(limit).skip(limit*page)
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: allProductFilter,
                    total: totalProducts,
                    pageCurrent: page+1,
                    totalPages: Math.ceil(totalProducts/limit)
                })
            }
            if(sort){   
                console.log('OK');
                const objectSort ={}
                objectSort[sort[1]]=sort[0]
                // console.log(objectSort)
                const allProductSort = await Product.find().limit(limit).skip(limit*page).sort(objectSort)
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: allProductSort,
                    total: totalProducts,
                    pageCurrent: page+1,
                    totalPages: Math.ceil(totalProducts/limit)
                })
            }
            const allProduct = await Product.find().limit(limit).skip(limit*page)
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: allProduct,
                total: totalProducts,
                pageCurrent: page+1,
                totalPages: Math.ceil(totalProducts/limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}


module.exports ={
    createProduct,
    updateProduct,
    deleteProduct,
    getDetailsProduct,
    getAllProduct
}