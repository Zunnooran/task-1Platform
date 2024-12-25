import userImg from 'assets/images/user.jpg';

export const departments = [
  { value: '', label: 'Select department' },
  { value: 'hr', label: 'Human Resources' },
  { value: 'it', label: 'IT' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'finance', label: 'Finance' },
];

export const roles = [
  { value: '', label: 'Select role' },
  { value: 'manager', label: 'Manager' },
  { value: 'developer', label: 'Developer' },
  { value: 'designer', label: 'Designer' },
  { value: 'analyst', label: 'Analyst' },
];

export const userData = [
  {
    id: 1,
    name: 'Jason Bourn',
    image: userImg,
    type: 'VIP',
    email: 'jb@association.com',
    organization: 'The Association LLC',
    phone: '+971 55 555 5555',
    status: 'Accepted',
  },
  {
    id: 2,
    name: 'Neil Crouguer',
    image: userImg,
    type: 'Normal',
    email: 'neil@mail.com',
    organization: 'Neil Crouguer LLC',
    phone: '+971 55 555 5555',
    status: 'Rejected',
  },
  {
    id: 3,
    name: 'Neil Crouguer',
    image: userImg,
    type: 'Normal',
    email: 'neil@mail.com',
    organization: 'Neil Crouguer LLC',
    phone: '+971 55 555 5555',
    status: 'Accepted',
  },
];
