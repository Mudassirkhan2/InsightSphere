import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
export const cards = [
    {
      id: 1,
      title: "Total Users",
      number: 10.928,
      change: 12,
    },
    {
      id: 2,
      title: "Stock",
      number: 8.236,
      change: -2,
    },
    {
      id: 3,
      title: "Revenue",
      number: 6.642,
      change: 18,
    },
  ];
  export const data = [
    {
      name: "Sun",
      visit: 4000,
      click: 2400,
    },
    {
      name: "Mon",
      visit: 3000,
      click: 1398,
    },
    {
      name: "Tue",
      visit: 2000,
      click: 3800,
    },
    {
      name: "Wed",
      visit: 2780,
      click: 3908,
    },
    {
      name: "Thu",
      visit: 1890,
      click: 4800,
    },
    {
      name: "Fri",
      visit: 2390,
      click: 3800,
    },
    {
      name: "Sat",
      visit: 3490,
      click: 4300,
    },
  ];
  export const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/",
                icon: <MdDashboard />,
            },
            {
                title: "Users",
                path: "/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Products",
                path: "/products",
                icon: <MdShoppingBag />,
            },
            {
                title: "Transactions",
                path: "/transactions",
                icon: <MdAttachMoney />,
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/revenue",
                icon: <MdWork />,
            },
            {
                title: "Reports",
                path: "/reports",
                icon: <MdAnalytics />,
            },
            {
                title: "Teams",
                path: "/teams",
                icon: <MdPeople />,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/help",
                icon: <MdHelpCenter />,
            },
        ],
    },
];