export interface commentRes {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items?: ItemsEntity[] | null;
}
export interface ItemsEntity {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  fullname: string;
  email: string;
  website: string;
  message: string;
  postId: string;
}
