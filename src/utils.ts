export function getTotalAmtWithTip(tipPersnt: number, totAmt: number) {
    return ((tipPersnt * totAmt) / 100 + totAmt);
}
