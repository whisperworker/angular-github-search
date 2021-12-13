import {Owner} from "./Owner";

export interface Repository {
  id: number;
  name: string;
  owner: Owner;
  description: string;
  createdDate: string;
  updatedDate: string;
  pushedDate: string;
  language: string;
  size: number;
  stars: number;
}
