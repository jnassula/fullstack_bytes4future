function tempoEmPalavrasSimplificado(hora, minuto){
    const horas = new Map([
        [0,'zero horas'],
        [1, 'uma hora'],
        [2, 'duas horas'],
        [3, 'três horas'],
        [4, 'quatro horas'],
        [5, 'cinco horas'],
        [6, 'seis horas'],
        [7, 'sete horas'],
        [8, 'oito horas'],
        [9, 'nove horas'],
        [10, 'dez horas'],
        [11, 'onze horas'],
        [12, 'doze horas']
    ])

    const minutos = new Map([
        [0,'zero minutos'],
        [1, 'uma hora'],
        [2, 'duas minutos'],
        [3, 'três minutos'],
        [4, 'quatro minutos'],
        [5, 'cinco minutos'],
        [6, 'seis minutos'],
        [7, 'sete minutos'],
        [8, 'oito minutos'],
        [9, 'nove minutos'],
        [10, 'dez minutos'],
        [11, 'onze minutos'],
        [12, 'doze minutos'],
        [13,'treze minutos'],
        [14, 'catorze miutos'],
        [15, 'quinze minutos'],
        [16, 'dezasseis minutos'],
        [17, 'dezassete minutos'],
        [18, 'dezoito minutos'],
        [19, 'dezanove minutos'],
        [20, 'vinte minutos'],
        [21, 'vinte e um minutos'],
        [22, 'vinte e dois minutos'],
        [23, 'vinte e três minutos'],
        [24, 'vinte e quatro minutos'],
        [25, 'vinte e cinco minutos']
    ])

    return `${horas.get(hora)} e ${minutos.get(minuto)}`
    
}

console.log(tempoEmPalavrasSimplificado(0, 0))
console.log(tempoEmPalavrasSimplificado(2, 21))