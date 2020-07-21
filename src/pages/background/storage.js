

export function getRegisteredId(){

    return localStorage.getItem("id")
}

export function saveIdInStorage(value) {
    localStorage.setItem("id",value)
}
