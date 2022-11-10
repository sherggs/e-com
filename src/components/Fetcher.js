const BASE_URL = "http://localhost:3001";

export const Fetcher = async(url) => {
    let responseObject = { errorMessage: '', data: []};


    //try and catch 
    try {
        const response = await fetch(BASE_URL + url);
        if(!response.ok){
            throw new Error(`HTTP Error ${response.status}`)
        }
        const ResponseData = response.json;
        responseObject.errorMessage = '';
        responseObject.data = ResponseData;

        return responseObject;
    }
    catch(err){

        responseObject.errorMessage  = err.message;
        return responseObject;

    }
}
export const getCategories = () =>{
    return Fetcher("/Categories")
}
export const getProducts = id =>{
    return Fetcher('/Products?catId' + id)
}
export const getProductsById = id =>{
    return Fetcher('/Products' + id)
}
export const getCategoryById = id =>{
    return Fetcher('/Categories' + id)
}
export const getProductsByQuery = query => {
    return Fetcher('/products?q=' + query);

}

const setProductHtml = () => {
    return {__html: getProducts.data?.description}
}