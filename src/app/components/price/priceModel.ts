export class priceItem{
  date:Date=new Date();
  open:number=0;
  high: number=0;
  low?:number;
  close: number=0;
  adjusted_close?:number;
   volume?:number;
   dividend_amount?: number;
  split_coefficient?: number;
  difference?:number;
}
