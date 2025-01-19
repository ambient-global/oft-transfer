import { transfer } from "./transfer"
import { payer } from "./utils"

const main = async () => {

    // amount in wif
    const amountIn = 0.001
    // address to send to on Ethereum
    const ethTo = '0x0743eb3b57c0ec36a48dc5CeC88d13A7dAC9203a'

    await transfer(payer, amountIn, ethTo)
}

main()