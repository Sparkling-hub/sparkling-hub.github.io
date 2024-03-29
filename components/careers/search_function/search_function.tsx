
import IJob from '@/interface/IJob';

 
export const getIds = (data: IJob[] , name: string): any[]=> {
  const result: any[] = [];
  const uniqueValues: Set<any> = new Set();
 
  data.forEach((item) => {
    if ((item as any).hasOwnProperty(name)) {
      const value = (item as any)[name];
      
      if (!uniqueValues.has(value)) {
        let count = data.filter((el) => (el as any)[name] === value).length; 
        result.push({value, count});
        uniqueValues.add(value);
      }
    }
  });  
  return result;
};
 
export const get = (data:any, name: string): any[] => {
  let result: any[] = [];
  Object.keys(data).forEach((key:any) => {
 
    if (key == name) result =  data[key];
  });
  return result;

};
