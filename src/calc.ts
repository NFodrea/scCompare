import { Ship, UpgradeCCU } from "./ships";


export const printCheapest = (a: Pick<Ship, "ccu" | "original">, b: Pick<Ship, "ccu" | "original">) => {
    const val1 = typeof a.ccu !== "undefined" ? a.ccu : a.original || 999;
    const val2 = typeof b.ccu !== "undefined" ? b.ccu : b.original || 999;

    return val1 - val2;
}

export const printHighest = (a: Pick<Ship, "ccu" | "original">, b: Pick<Ship, "ccu" | "original">) => {
    const val1 = typeof a.ccu !== "undefined" ? a.ccu : a.original || 999;
    const val2 = typeof b.ccu !== "undefined" ? b.ccu : b.original || 999;

    return val2 - val1;
}

// TODO see about making this generic
export const printHighestCCU = (val1: Pick<UpgradeCCU, "price">, val2: Pick<UpgradeCCU, "price">) => {
    return val2.price - val1.price;
}
export const printLowestCCU = (val1: Pick<UpgradeCCU, "price">, val2: Pick<UpgradeCCU, "price">) => {
    return val1.price - val2.price;
}

