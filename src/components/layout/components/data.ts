import { FiSettings } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { LuUserRound } from 'react-icons/lu';
import { MdOutlineHelpOutline } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';

import AccessRoleIcon from 'assets/icons/access-role.svg?react';
import CustomersIcon from 'assets/icons/cutomers.svg?react';
import DealsIcon from 'assets/icons/deals.svg?react';
import DistributorIcon from 'assets/icons/distributor.svg?react';
import LicenseIcon from 'assets/icons/license.svg?react';
import PartnersIcon from 'assets/icons/partners.svg?react';
import ProductsIcon from 'assets/icons/products.svg?react';

import { ILanguage } from './types';

export const menuItems = [
  { key: 1, name: 'Dashboard', path: '/', icon: RxDashboard },
  {
    key: 2,
    name: 'User',
    path: '/user',
    icon: LuUserRound,
    children: [
      { key: 2.1, name: 'Active', path: '/user/active' },
      { key: 2.2, name: 'Waiting List', path: '/user/waiting-list' },
    ],
  },
  { key: 3, name: 'Distributor', path: '/distributor', icon: DistributorIcon },
  { key: 4, name: 'Partner', path: '/partner', icon: PartnersIcon },
  { key: 5, name: 'Customers', path: '/customers', icon: CustomersIcon },
  { key: 6, name: 'Access role', path: '/access-role', icon: AccessRoleIcon },
  { key: 7, name: 'Products', path: '/products', icon: ProductsIcon },
  { key: 8, name: 'License', path: '/license', icon: LicenseIcon },
  { key: 9, name: 'Deals', path: '/deals', icon: DealsIcon },
];

export const footerItems = [
  { key: 1, name: 'Settings', path: '/settings', icon: FiSettings },
  { key: 2, name: 'Help', path: '/help', icon: MdOutlineHelpOutline },
  { key: 3, name: 'Logout', path: '/logout', icon: FiLogOut, textClass: 'text-red-500 border-t pt-4' },
];

export const languages: ILanguage[] = [
  { key: 1, name: 'EN', logo: 'https://flagcdn.com/w40/gb.png' },
  { key: 2, name: 'AED', logo: 'https://flagcdn.com/w40/ae.png' },
  { key: 3, name: 'FRN', logo: 'https://flagcdn.com/w40/fr.png' },
];
