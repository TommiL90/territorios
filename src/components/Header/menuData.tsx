import { Menu } from '../../types/menu'

const menuData: Menu[] = [
  {
    id: 1,
    title: 'Inicio',
    path: '/',
    newTab: false,
  },
  {
    id: 2,
    title: 'Mapa de la Congregación',
    path: '/map',
    newTab: false,
  },
  {
    id: 33,
    title: 'Territorios',
    path: '/territories',
    newTab: false,
  },
  {
    id: 4,
    title: 'Otros',
    newTab: false,
    submenu: [
      {
        id: 41,
        title: 'Sign In Page',
        path: '/signin',
        newTab: false,
      },
      {
        id: 42,
        title: 'Sign Up Page',
        path: '/signup',
        newTab: false,
      },
    ],
  },
]
export default menuData
