import { faker } from "@faker-js/faker";
import { Router } from "express";

faker.location = 'es'
export const mockinRouter = Router()

function generarProductos (){
    return{
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        stock: faker.number.int(),
        id: faker.database.mongodbObjectId(),
    }
}


mockinRouter.get('/', async (req,res) => {
    let productos = []
    for(let i = 0; i<100; i++) {
        productos.push(generarProductos())
    }
    res.send({status:"succes", payload:productos})
} )

