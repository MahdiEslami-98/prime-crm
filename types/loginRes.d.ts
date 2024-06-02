export interface loginRes {
  token: string;
  record: Record;
}
export interface Record {
  id: string;
  collectionId: string;
  collectionName: string;
  username: string;
  verified: boolean;
  emailVisibility: boolean;
  email: string;
  created: string;
  updated: string;
  isAdmin: boolean;
}
