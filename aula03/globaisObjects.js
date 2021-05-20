function adicionaDias(data, n){
    const MS_IN_A_DAY = (24 * 60 * 60 * 1000)
    return new Date(data.valueOf() + (n * MS_IN_A_DAY))
}

console.log(adicionaDias(new Date(), 5))


const data2021 = new Date("2021-08-02 12:30")
function formataData(data){
    return `${data.getDate().toString().padStart(2, "0")}/${(data.getMonth()+1).toString().padStart(2, "0")}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
}

console.log(formataData(data2021))