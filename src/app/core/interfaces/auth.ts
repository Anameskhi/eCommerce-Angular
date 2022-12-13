export interface Auth {
  email: string;
  password: string;
  returnSecureToken: boolean
}
export interface AuthResponse{
    kind: string;
    localId: string;
    email: string;
    idToken: string;
    registered?: boolean;
    refreshToken: string;
    expiresIn: string;
}
