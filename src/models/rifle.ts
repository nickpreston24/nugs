type Kind = "AR15" | "AR10" | "PCC" | "PDW"

type Variant = "PCC" | "PDW" | "Recce" | "DMR" | "CQB"
type Brand = {

}

type UpperReceiver = {
    handguard: null,
    barrel: null,
    bcg: null,
    gasblock: null,
    gastube: null,
}
type Upper = {
    name: "",
    brand: Brand,
}
type Lower = {
    LPK: {
        brand: "",
    },
}


type Stock = { id: null, brand: "" }

type Buffer = {
    spring: null,
    tube: null,
    alt: null,
}


interface RifleProps {
    kind: Kind,
    buffer: Buffer,
    upper: Upper,
    buttstock: Stock,
    lower: Lower,
}

class Rifle implements RifleProps {

    kind: Kind = "AR15"
    buffer!: Buffer
    upper!: Upper
    buttstock!: Stock
    lower!: Lower
    stock!: Stock

    constructor(kind: Kind) {
        this.kind = kind;
    }

    static create(kind: Kind) {

        const rifle = new Rifle(kind)

        return rifle;
    }

    withUpper(value: Upper) {
        this.upper = value;
        return this;
    }


    withLower(value: Lower) {
        this.lower = value;
        return this;
    }

    withUpperReceiver(value: Upper) {
        this.upper = value;
        return this;
    }

    withStock(value: Stock) {
        this.stock = value;
        return this;
    }
}