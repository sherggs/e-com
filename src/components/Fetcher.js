const BASE_URL = "http://localhost:3001";

export const Fetcher = async(url) => {
    let responseObject = { errorMessage: '', data: []};

    try {
        const response = await fetch(BASE_URL + url);
        if(!response.ok){
            throw new Error(`HTTP Error ${response.status}`)
        }
        const ResponseData = await response.json;
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