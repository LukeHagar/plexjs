export interface GetMyPlexAccountResponse {
  MyPlex?: MyPlex;
}
interface MyPlex {
  authToken?: string;
  username?: string;
  mappingState?: string;
  mappingError?: string;
  signInState?: string;
  publicAddress?: string;
  publicPort?: number;
  privateAddress?: string;
  privatePort?: number;
  subscriptionFeatures?: string;
  subscriptionActive?: boolean;
  subscriptionState?: string;
}
