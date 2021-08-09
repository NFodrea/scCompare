#!/usr/bin/env node
import chalk from "chalk";
import { clear } from "console";
import figlet from "figlet";
import path from "path/posix";
import { program } from "commander";

import { printCheapest, printHighest, printHighestCCU } from "./calc";
import shipList from "./ships";
import { ccuUpgrades } from "./upgrades";

clear();
console.log(
    chalk.blue(
        figlet.textSync('sc shipz', { horizontalLayout: 'full' })
    )
);

program
    .version('0.0.1')
    .description("pay as little as possible to win")
    .option('-cs, --cheapShip', 'List ships in order of cheap to expensive')
    .option('-es, --expensiveShip', 'List ships in order of expensive to cheap')
    .parse(process.argv);
// console.log("cheapest", shipList.sort(printCheapest));
// console.log("expensive", shipList.sort(printHighest));

// console.log("expensive", ccuUpgrades.sort(printHighestCCU));

