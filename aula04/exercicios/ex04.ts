class ArrayTipificado<T> {
    private array: T[] = []
    public insereNoArray(elemento: T) {
        this.array = this.array.concat(elemento);
        return this.array;
    }
}

const 