export interface UserInterface {
  id?: string;
  name: string;
  company: string;
  position: 'user' | 'admin'
}

export const enum UserKey {
  ID = 'id',
  NAME = 'name',
  COMPANY = 'company',
  POSITION = 'position'
}