
export function randomDate(start, end) {

    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


export var d = randomDate(new Date(2012, 0, 1), new Date());



export function randomDateTime(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export var dt = randomDateTime(new Date(2012, 0, 1), new Date());