export interface IRouteParams {
    match: {
      params: {
        type: string;
      };
    };
}
  
export interface IData {
    id: number | string;
    title: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;
}