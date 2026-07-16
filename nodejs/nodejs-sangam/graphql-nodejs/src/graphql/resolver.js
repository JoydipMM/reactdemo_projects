const products = require("../dummy-data/demo-products");

const resolvers = {
    // here we pass queries
    Query: {
        products: () => {
            return products; // this products is from dummy-data
        },
        product: (_, {id}) => {
            return products.find((item) => item.id === id);
        }
    },
    Mutation: {
            createProduct: (_, {title, description, category, price, inStock}) =>{
                const newlyProduct = {
                    id: String(products.length + 1),
                    title,
                    description,
                    category,
                    price,
                    inStock
                }
                products.push(newlyProduct);
                return newlyProduct;
                },

                deleteProduct:(_, {id}) => {
                    const index = products.findIndex((item) => item.id === id);
                    if(index === -1){
                        return false;
                    }
                    products.splice(index, 1);
                    return true;
                },

                updateProduct:(_,{id, ...updates}) => {
                    const index = products.findIndex((item) => item.id === id);
                    if(index === -1){
                        return null;
                    }
                    const updateProduct = {
                        ...products[index], ...updates
                    }
                    products[index] = updateProduct;
                    return updateProduct;
                }
            },
            
}

module.exports = resolvers;