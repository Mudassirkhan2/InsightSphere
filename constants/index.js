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

export const transactionsdata = [
  {
      name: "Sun",
      books: 4000,
      clothes: 2400,
      electronic: 2400,
  },
  {
      name: "Mon",
      books: 3000,
      clothes: 1398,
      electronic: 2210,
  },
  {
      name: "Tue",
      books: 2000,
      clothes: 9800,
      electronic: 2290,
  },
  {
      name: "Wed",
      books: 2780,
      clothes: 3908,
      electronic: 2000,
  },
  {
      name: "Thu",
      books: 1890,
      clothes: 4800,
      electronic: 2181,
  },
  {
      name: "Fri",
      books: 2390,
      clothes: 3800,
      electronic: 2500,
  },
  {
      name: "Sat",
      books: 3490,
      clothes: 4300,
      electronic: 2100,
  },
];
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
                path: "/",
                icon: <MdWork />,
            },
            {
                title: "Reports",
                path: "/",
                icon: <MdAnalytics />,
            },
            {
                title: "Teams",
                path: "/",
                icon: <MdPeople />,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/",
                icon: <MdHelpCenter />,
            },
        ],
    },
];

export const barChartBoxVisit = [
  {
      name: "Sun",
      visit: 4000,
  },
  {
      name: "Mon",
      visit: 3000,
  },
  {
      name: "Tue",
      visit: 2000,
  },
  {
      name: "Wed",
      visit: 2780,
  },
  {
      name: "Thu",
      visit: 1890,
  },
  {
      name: "Fri",
      visit: 2390,
  },
  {
      name: "Sat",
      visit: 3490,
  },
];


