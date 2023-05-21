export type UserData = {
  id?: number;
  email: string;
  first_name: string;
  last_name: string;
  profile: ProfileData;
};

export type ProfileData = "master" | "admin" | "user" | "external" | undefined;
