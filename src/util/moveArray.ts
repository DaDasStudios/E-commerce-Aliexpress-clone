export const moveArray = (array: Array<any>, times: number) => {
    if (times > 0) {
        for (let i = 0; i < times; i++) {
            array.push(array.at(0));
            array.shift();
        }
    } else {
        for (let i = 0; i > times; i--) {
            array.push(array.at(0));
            array.shift();
        }
    }
    return array
}