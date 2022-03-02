function receivesAFunction(callbackFunction) {
    return callbackFunction();
}

function returnsANamedFunction() {
    return function returnsANamedFunction() {};
}

function returnsAnAnonymousFunction() {
    return function () {};
}
