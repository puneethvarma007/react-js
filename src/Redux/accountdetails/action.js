export function deposit(amount){
   return { type: "deposit", payload: amount }
}
export function withdraw(amount){
    return { type: "withdraw", payload: amount }
}
export function updateFullName(name){
    return { type: "update_fullname", payload: name }
}

export function updateMobile(mobile){
    return { type: "update_mobile", payload: mobile }
}
export function reset(){
    return { type: "reset"}
}