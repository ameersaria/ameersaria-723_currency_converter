#!/usr/bin/env node 

import inquirer from "inquirer"

const currency:any = {
    USD:1,
    SAR:3.75,
    PKR:278,
    PESO:56.53,
    KWACHA:24.64,
    AFN:71.25,
    JZD:134.39,
    BHD:0.38,
    EGP:48.00,
    PGK:3.82,
    AZN:1.70
}
let user_answer = await inquirer.prompt([{

    "name":"From",
    "message":("Enter from currency"),
    "type":"list",
    "choices":["USD","SAR","PKR","PESO","KWACHA","AFN","JZD","BHD","EGP","PGK","AZN"]
},
{
    "name":"To",
    "message":("Enter to currency"),
    "type":"list",
    "choices":["USD","SAR","PKR","PESO","KWACHA","AFN","JZD","BHD","EGP","PGK","AZN"] 
},
{
    "name":"Amount",
    "message":("Enter your amount"),
    "type":"number"
}
]);

let from_amount=currency[user_answer.From]
                         // usd
let to_amount=currency[user_answer.To]
                         // pkr
let amount=user_answer.Amount

let baseAmount=amount/from_amount
            //   15000   /278
let converted_amount= baseAmount * to_amount;
console.log(converted_amount);


// console.log(from_amount);
// console.log(to_amount);
// console.log(amount);

