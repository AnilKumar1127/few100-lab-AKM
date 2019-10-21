export function getTotalAmtWithTip(tipPersnt: number, totAmt: number) {
    return ((tipPersnt * totAmt) / 100 + totAmt);
}
export function tipCal(tipPer: number, billAmt: number) {
    return ((tipPer * billAmt) / 100);
}
