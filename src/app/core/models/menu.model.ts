export interface Menu {
  id: number;
  slug: string;
  name: string;
  links: MenuLink[][];
}

export interface MenuLink {
  text: string;
  href: string;
  icon?: string;
  order: number;
}
