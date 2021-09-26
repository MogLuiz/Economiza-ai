// -------------------------------------------------
// index.tsx
// -------------------------------------------------
export interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

// -------------------------------------------------
// styles.ts
// -------------------------------------------------
export interface ILegendProps {
    color: string;
}