import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const filterByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let dateSplit = date.split('-'); // split the date string into an array, splited over the appearence of '-' 
  let year = dateSplit[0]; // get year
  let month = dateSplit[1]; // get month

  for(let i in list) {
    if(list[i].date.getFullYear() === parseInt(year) && list[i].date.getMonth() + 1 === parseInt(month)) {
      newList.push(list[i]);
    }
    
  }
  return newList;
}