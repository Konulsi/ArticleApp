export interface RegisterResponse {
  user: {
    email: string;
    username: string;
    bio: any;
    image: string;
    token: string;
  };
}
