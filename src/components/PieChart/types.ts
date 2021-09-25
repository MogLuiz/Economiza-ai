// -------------------------------------------------
// Styles.ts
// -------------------------------------------------
export interface ILegendProps {
   color: string; 
}

// -------------------------------------------------
// Index.tsx
// ------------------------------------------------- 

export interface IPieChartProps {
   data: {
      name: string;
      value: number;
      percent: number;
      color: string;
   }[]
}