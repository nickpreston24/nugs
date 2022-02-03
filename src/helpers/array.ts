export class UniqueArray extends Array {
    constructor(...args: any[]) {
        super(...new Set(args));
    }
    push(...args: any[]) {
        for (const a of args) if (!this.includes(a)) super.push(a);
        return this.length;
    }
    unshift(...args: any[]) {
        for (const a of args.reverse()) if (!this.includes(a)) super.unshift(a);
        return this.length;
    }
    concat(...args: any[]) {
        var r = new UniqueArray(...this);
        for (const a of args) r.push(...a);
        return r;
    }
}

export const unique = (array: [], field = '') => {
    return array.reduce((accumulator, current) => {
        if (!accumulator.includes(current[field])) {
            accumulator.push(current[field])
        }
        return accumulator;
    }, []
    )
}

export default UniqueArray;
