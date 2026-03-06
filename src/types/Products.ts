export interface Product {
  id: string;
  blogId: string;   

  name: string;

  image: string;
  price: number;

  originalPrice: number;
  discountPercent: number;

  rating: number;
  reviews: number;
  
  
  affiliateUrl: string;
  badge?: string;
  
  category: string;
subCategory?: string; 

   description?: string;
  details?: string[];
  tags?: string[];
}