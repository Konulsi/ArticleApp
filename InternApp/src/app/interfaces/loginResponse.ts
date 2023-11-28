export interface LoginResponse {
  user: {
    email: string;
    username: string;
    bio: any;
    image: string;
    token: string;
  };
}
