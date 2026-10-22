import { Folders } from "@imagekit/nodejs/resources/index.mjs"
import productModel from "../models/product.model.js"
import { uploadFile } from "../services/storage.service.js" 



export async function createProduct(req,res) {
    console.log(req.body)
    console.log(req.files)

    const fileUrls = []


    for( let i=0; i<req.files.length; i++){
        const response = await uploadFile({
            buffer:req.files[ i ].buffer,
            fileName: req.files[ i ].originalname,
            
        })
        console.log(response)


    }

    res.status(200).json({
        message:"Dummy response"
    })
}