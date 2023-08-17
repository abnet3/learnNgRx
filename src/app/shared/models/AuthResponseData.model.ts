export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToke: string;
  expiresIn: string;
  localId:string;
  registered?: boolean;
}