import { printCheapest, printHighest, printHighestCCU } from "./calc";
import shipList from "./ships";
import { Ship, UpgradeCCU } from "./ships";


console.log("cheapest", shipList.sort(printCheapest));
console.log("expensive", shipList.sort(printHighest));

// console.log("expensive", ccuUpgrades.sort(printHighestCCU));
