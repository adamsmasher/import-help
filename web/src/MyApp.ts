import {square} from '@common/MyModule';

export function doStuff() {
    const result = prompt("Give me a number to square");
    if (result !== null) {
        const n = Number.parseInt(result, 10);
        alert(square(n));
    }
}