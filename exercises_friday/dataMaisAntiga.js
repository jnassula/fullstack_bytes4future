function dataMaisAntiga(datas) {
    // escreve aqui a função
    let maisAntiga = datas[0];
    for (const data of datas){
        if(data.valueOf() < maisAntiga.valueOf()){
            maisAntiga = data;
        }
    }
    return maisAntiga;
}


console.log(dataMaisAntiga([new Date("2000-12-12"), new Date("2010-12-25")]))