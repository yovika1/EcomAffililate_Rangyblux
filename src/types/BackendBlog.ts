import type { BackendProduct } from "./BackendProduct";

export interface BackendBlog {
  _id: string;
  category: string;
  subCategory?: string;  
  badge?: string;
 details?: {
    _id: string;
    name: string;
    value: string;
  }[];
   product?: BackendProduct;
  
}