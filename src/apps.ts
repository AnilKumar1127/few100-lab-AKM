import { getTotalAmtWithTip, tipCal } from './utils';

let bill = 0;
let inputSum: HTMLInputElement;
let custTipAmt: HTMLInputElement;
let custTipBt: HTMLElement;
let tipSlpitInput: HTMLInputElement;
let seletdTip: NodeListOf<HTMLButtonElement>;
let calTipAmt = 0;
let userTipAmt = 0;
const grndTotal = document.getElementById('grndtotal');
const tipAmt = document.getElementById('tipAmt');
const sptAmtInto = document.getElementById('amoutSplit');
export function runApp() {
    seletdTip = document.querySelectorAll('button');
    inputSum = document.getElementById('totalAmt') as HTMLInputElement;
    custTipAmt = document.getElementById('custmAmt') as HTMLInputElement;
    custTipBt = document.getElementById('custTip');
    tipSlpitInput = document.getElementById('tipSlpit') as HTMLInputElement;
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
    calTipAmt = getTotalAmtWithTip(numTip, bill);
    userTipAmt = tipCal(numTip, bill);
    tipAmt.innerText = 'Amount of tip:$' + userTipAmt.toString();
    grndTotal.innerText = 'Total Amount:$' + calTipAmt.toString();

    const nway = tipSlpitInput.valueAsNumber;
    const youPay = (calTipAmt / nway);
    sptAmtInto.innerText = 'Amout is Split into"' + nway + '"ways:$' + youPay.toString();
}

function custTipCal() {
    const nowTip = custTipAmt.valueAsNumber;
    calTipAmt = getTotalAmtWithTip(nowTip, bill);
    userTipAmt = tipCal(nowTip, bill);
    tipAmt.innerText = 'Amount of tip:$' + userTipAmt.toString();
    grndTotal.innerText = 'Total Amount:$' + calTipAmt.toString();
    const nway = tipSlpitInput.valueAsNumber;
    const youPay = (calTipAmt / nway);
    sptAmtInto.innerText = 'Amout is Split into"' + nway + '"ways:$' + youPay.toString();
}

runApp();
