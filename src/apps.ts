import { getTotalAmtWithTip } from './utils';

let bill = 0;
let inputSum: HTMLInputElement;
let custTipAmt: HTMLInputElement;
let custTipBt: HTMLElement;
let seletdTip: NodeListOf<HTMLButtonElement>;
const grndTotal = document.getElementById('grndtotal');
// let sum: number;
export function runApp() {
    seletdTip = document.querySelectorAll('button');
    inputSum = document.getElementById('totalAmt') as HTMLInputElement;
    custTipAmt = document.getElementById('custmAmt') as HTMLInputElement;
    custTipBt = document.getElementById('custTip');
    seletdTip.forEach(el => el.addEventListener('click', handleClick));
    custTipBt.addEventListener('click', custTipCal);
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

function custTipCal() {
    const nowTip = custTipAmt.valueAsNumber;
    const x = getTotalAmtWithTip(nowTip, bill);
    grndTotal.innerText = 'Total Amount:$' + x.toString();
}
runApp();
