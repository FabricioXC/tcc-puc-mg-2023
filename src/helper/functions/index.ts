export const navbarChangeBreakpoint = (width: number): any => {
  if (width <= 767) {
    return "small";
  } else {
    return "large";
  }
};

export const getInitials = (name: string): string => {
  const names = name.split(" ");
  let initials = "";
  names.forEach((n) => {
    initials += n[0];
  });
  return initials.toUpperCase();
};
