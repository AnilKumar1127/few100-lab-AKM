import { getTotalAmtWithTip } from './utils';

let bill = 0;
let inputSum: HTMLInputElement;
let custTip: HTMLInputElement;
let seletdTip: NodeListOf<HTMLButtonElement>;
const grndTotal = document.getElementById('grndtotal');
// let sum: number;
export function runApp() {
    seletdTip = document.querySelectorAll('button');
    inputSum = document.getElementById('totalAmt') as HTMLInputElement;
    custTip = document.getElementById('custmAmt') as HTMLInputElement;
    seletdTip.forEach(el => el.addEventListener('click', handleClick));


    // if (custTip.valueAsNumber === null) {
    //     seletdTip.forEach(el => el.addEventListener('click', handleClick));
    // } else if (custTip.valueAsNumber != null) {
    //     const x = getTotalAmtWithTip(custTip.valueAsNumber, bill);
    //     grndTotal.innerText = 'Total Amount:$' + x.toString();
    // }

}

function handleClick() {
    let numTip;
    const that = this;

    bill = inputSum.valueAsNumber;
    if (that.innerHTML === '%10') {
        numTip = 10;
    } else if (that.innerText === '%15') {
        numTip = 15;
    } else if (that.innerText === '%20') {
        numTip = 20;
    }
    const x = getTotalAmtWithTip(numTip, bill);
    grndTotal.innerText = 'Total Amount:$' + x.toString();
}

runApp();
