// assets
import {
    IconBrandFramer,
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconLayoutGridAdd,
    IconKey,
    IconUsers
} from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconBrandFramer,
    IconLayoutGridAdd,
    IconUsers
};

// ===========================|| UTILITIES MENU ITEMS ||=========================== //

const maintenances = {
    id: 'maintenances',
    title: 'Mantenimientos',
    type: 'group',
    children: [
        {
            id: 'users',
            title: 'Usuarios',
            type: 'item',
            url: '/user',
            icon: icons.IconUsers,
            breadcrumbs: false
        }
        // {
        //     id: 'Usuarios',
        //     title: 'Usuarios',
        //     type: 'collapse',
        //     icon: icons.IconUsers,
        //     children: [
        //         {
        //             id: 'login3',
        //             title: 'Lista de usuarios',
        //             type: 'item',
        //             url: '/pages/login/login3',
        //             target: true
        //         },
        //         {
        //             id: 'register3',
        //             title: 'Register',
        //             type: 'item',
        //             url: '/pages/register/register3',
        //             target: true
        //         }
        //     ]
        // },
        // {
        //     id: 'icons',
        //     title: 'Icons',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     children: [
        //         {
        //             id: 'tabler-icons',
        //             title: 'Tabler Icons',
        //             type: 'item',
        //             url: '/icons/tabler-icons',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'material-icons',
        //             title: 'Material Icons',
        //             type: 'item',
        //             url: '/icons/material-icons',
        //             breadcrumbs: false
        //         }
        //     ]
        // }
    ]
};

export default maintenances;
