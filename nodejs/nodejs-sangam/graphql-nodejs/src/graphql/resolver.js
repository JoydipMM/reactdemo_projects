const Product = require("../models/product");

const resolvers = {
    // here we pass queries
    Query: {
        products: async () =>  await Product.find({}), // this products is from Product model
        product: async (_, {id}) => {
            return await Product.findById(id);
        }
    },
    Mutation: {
        createProduct: async(_, arg) =>{
            const newlyProduct = new Product(arg);
            return await newlyProduct.save();
        },

        deleteProduct: async (_, {id}) => {
            const deletedProduct = await Product.findByIdAndDelete(id);
            return !!deletedProduct;
        },

        updateProduct: async (_,{id, ...updates}) => {
            const updateProduct = await Product.findByIdAndUpdate(id, updates, {returnDocument: "after"});
            return updateProduct;
        }
    },
            
}

module.exports = resolvers;