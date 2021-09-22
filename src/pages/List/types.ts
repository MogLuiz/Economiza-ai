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
    dateFormatted: string;
    tagColor: string;
}