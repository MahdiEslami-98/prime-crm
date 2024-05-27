export interface posts {
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
  title: string;
  content: string;
  category: string;
  image: string;
}
