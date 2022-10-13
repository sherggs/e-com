const BASE_URL = "http://localhost:3001";

export const Fetcher = async(url) => {
    let responseObject = { errorMessage: '', data: []};

    try {
        const Response = await fetch(BASE_URL + url);
        const ResponseData = await Response.json;
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