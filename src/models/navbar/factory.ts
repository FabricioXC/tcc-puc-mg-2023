import { ProfileData } from "../pages/data";
import { Dropdown, NavbarMenuOptions, Option } from "./navbarData";

const makeNavbarMenuOptions = (
  profile: ProfileData
): NavbarMenuOptions | null => {
  let navMenu = null as NavbarMenuOptions | null;
  let masterDropOptions: Dropdown = {
    title: "Cadastro",
    options: [
      { title: "Usuários", path: "/users" },
      { title: "Departamento", path: "/departments" },
      { title: "Prioridade", path: "/priorities" },
      { title: "Status", path: "/status" },
      { title: "Tarefas", path: "/tasks" },
    ],
  };

  let standardOptions: Option[] = [{ title: "Minhas Tarefas", path: "/" }];
  switch (profile) {
    case "master":
    case "admin":
      navMenu = {
        dropdown: masterDropOptions,
        options: standardOptions,
      };
      break;
    case "user":
      navMenu = {
        // dropdown: masterDropOptions,
        options: standardOptions,
      };
      break;
    case "external":
      navMenu = {
        // dropdown: masterDropOptions,
        options: [{ title: "Pedidos de suporte", path: "/" }],
      };
      break;
    default:
      break;
  }
  return navMenu;
};

export const NavbarFactory = {
  makeNavbarMenuOptions,
};
