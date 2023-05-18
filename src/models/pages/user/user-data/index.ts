export type UserData = {
  email: string;
  first_name: string;
  last_name: string;
};

export type ProfileData = "master" | "admin" | "user" | "external" | undefined;
