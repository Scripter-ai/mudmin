export type SiteConfig = {
  name: string
  description: string
  url: string
  svg: string
  links: {
    linkedin: string
  }
}
  
export type DocsConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}
  
export type MarketingConfig = {
  mainNav: MainNavItem[]
}

export interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export interface MenubarProps {
  title: string;
  submenu?: { label: string; link: string }[];
}

export interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}