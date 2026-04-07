import { ReactNode } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface TrustBadge {
  icon: string;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  imageUrl?: string;
  tags: string[];
  specs: string[];
  isFeatured: boolean;
  viewDetailsHref?: string;
}

export interface Industry {
  icon: string;
  name: string;
  description: string;
}

export interface CtaData {
  headline: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  contactDetail: string;
}

export interface FooterLinkColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export interface FooterData {
  businessHours: ReactNode;
  companyName: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  linkColumns: FooterLinkColumn[];
}
