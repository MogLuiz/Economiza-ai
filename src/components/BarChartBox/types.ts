// -------------------------------------------------
// index.tsx
// -------------------------------------------------
export interface IBarChartProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[]
}


// -------------------------------------------------
// styles.ts
// -------------------------------------------------
export interface ILegendProps {
    color:string;
}