import API from './API'

export default {
    getProducts() {
        return API().get('/products')
    },
    getCategories() {
        return API().get('/products/categories')
    }
}