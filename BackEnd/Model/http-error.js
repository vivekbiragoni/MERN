class HttpError extends Error{
    constructor(message, errorCode){
        super(message); //adds a message property
        this.code = errorCode;
    }
}

export default HttpError;