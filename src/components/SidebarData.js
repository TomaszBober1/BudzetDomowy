import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'New Expense',
        path: '/new_expense',
        icon: <FaIcons.FaMoneyBillWave />,
        cName: 'nav-text'
    },
    {
        title: 'History',
        path: '/history',
        icon: <AiIcons.AiOutlineHistory />,
        cName: 'nav-text'
    },
    {
        title: 'Graphs',
        path: '/graphs',
        icon: <AiIcons.AiOutlineBarChart />,
        cName: 'nav-text'
    },
    {
        title: 'Loan',
        path: '/loan',
        icon: <GiIcons.GiTakeMyMoney />,
        cName: 'nav-text'
    },
    {
        title: 'Creditworthiness',
        path: '/creditworthiness',
        icon: <GiIcons.GiMoneyStack />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <AiIcons.AiOutlineLogin />,
        cName: 'nav-text'
    },
    {
        title: 'Registration',
        path: '/registration',
        icon: <RiIcons.RiAccountCircleLine />,
        cName: 'nav-text'
    }
]