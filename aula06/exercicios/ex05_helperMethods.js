function maperia(array){
    const transformation = (element) => element.length

    return array.map(transformation)
}

console.log(maperia(["12", "a", "abc"]))