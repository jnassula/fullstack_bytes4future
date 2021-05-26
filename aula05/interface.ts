interface IInteractable {
    interactProp: ()=> void
    interact() : void
}

class Bau implements IInteractable {
    interactProp = () => {}
    interact(){
        console.log('Texto qualquer...')
    }
}

class Cadeira implements IInteractable {
    interactProp = () => {}
    interact(){
        console.log('Texto qualquer sob a cadeira...')
    }
}

let array : IInteractable[] = []
array.push(new Bau())
array.push(new Cadeira())
array.forEach((e) => e.interact())