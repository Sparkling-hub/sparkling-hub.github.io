import React from 'react';
import IJob from '@/interface/IJob';

 
export const getLocationIds = (data: IJob[], name: string): any[] => {
  const result: any[] = [];
  const uniqueValues: Set<any> = new Set();
 
  data.forEach((item, index) => {
    if ((item as any).hasOwnProperty(name)) {
        console.log(item)
      const value = (item as any)[name];
      if (!uniqueValues.has(value)) {
        console.log(value);
        result.push(value);
        uniqueValues.add(value);
      }
    }
  });
 
  return result;
};
export const getPositionIds = (data: IJob[], name: string): any => {
  const result: any[] = [];
  const uniqueValues: Set<any> = new Set();
 
  data.forEach((item, index) => {
    if ((item as any).hasOwnProperty(name)) {
        console.log(item)
      const value = (item as any)[name];
      if (!uniqueValues.has(value)) {
        console.log(value);
        result.push(value);
        uniqueValues.add(value);
      }
    }
  });
 
  return result;
};