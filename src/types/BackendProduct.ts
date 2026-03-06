export interface BackendProduct {
  _id: string;
  
  productName: string;
  imageUrl: string;
  currentPrice: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewsCount: number;
  affiliateUrl: string;
  description?: string;
  details?: string;
  tags?: string[];
}