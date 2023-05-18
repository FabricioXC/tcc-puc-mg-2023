export type NavbarMenuOptions = {
  dropdown?: Dropdown;
  options: Option[];
};

export type Option = {
  title: string;
  path: string;
};

export type Dropdown = {
  title: string;
  options: Option[];
};
