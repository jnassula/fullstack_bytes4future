function diaDoAno(data){
    // escreve aqui a função
    const daysBi = [0, 31, 60, 91, 121, 152, 183, 213, 244, 274, 305, 335];
    const days = [0, 30, 59, 90, 120, 151, 182, 212, 243, 273, 304, 334];
    if(data.getFullYear() % 4 === 0){
        return (daysBi[data.getMonth()] + data.getDate())
    }
    return (days[data.getMonth()] + data.getDate())
} 


console.log(diaDoAno(new Date()))