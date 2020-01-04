function setStorage(name, value) {
    return localStorage.setItem(name, value);
};
function getStorage(name) {
    if(localStorage.getItem(name)) {
        return localStorage.getItem(name);
    } else {
        return false;
    }
};
function cleanStorage() {
    return localStorage.clear();
}
export {getStorage, setStorage, cleanStorage}