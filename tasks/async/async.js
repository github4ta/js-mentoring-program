const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback() {
    callbackFunction((err, data) => {
        console.log(data);
    });
}

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    promiseFunction()
        .then(data => console.log(data));
}

/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    try {
        const data = await promiseFunction();
        console.log(data);
    } catch(e) {
        console.log(e);
    }
}

/**
 * call callbackFunctionError with ()=>{} callback
 * catch an error come from callbackFunctionError
 * throw new error with 'Intercepted Error' message
 */
function handleErrorCallback() {
    try {
        callbackFunctionError(()=>{});
    }
    catch(err) {
        throw new Error('Intercepted Error');
    }
}
/**
 * catch an error come from promiseFunctionError
 * throw new error with 'Intercepted Error' message
 */
function handlePromiseError() {
    promiseFunctionError()
        .catch(err => {
            throw new Error('Intercepted Error');
        });
}

/**
 * catch an error come from promiseFunctionError using async/await
 * throw new error with 'Intercepted Error' message
 */
async function handleAsyncAwaitError() {
    try {
        await promiseFunctionError();
    } catch(e) {
        throw new Error('Intercepted Error');
    }
}

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};
