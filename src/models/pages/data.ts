export type AllData = UserData &
  TaskData &
  StatusData &
  PriorityData &
  DepartmentData;

export type UserData = {
  id?: number;
  email: string;
  first_name: string;
  last_name: string;
  profile: ProfileData;
};

export type DepartmentData = {
  id?: number;
  department: string;
};

export type StatusData = {
  id?: number;
  status: string;
};

export type PriorityData = {
  id?: number;
  priority: string;
};

export type TaskData = {
  id?: number;
  priority: string;
  status: string;
  department: string;
  user: string;
  description: string;
  title: string;
};
export type ProfileData = "master" | "admin" | "user" | "external" | undefined;
