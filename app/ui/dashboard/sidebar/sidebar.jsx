import Image from 'next/image';
import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css';
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
} from 'react-icons/md';
import { auth, signOut } from '@/app/auth';

const menuItems = [
  {
    title: '頁面',
    list: [
      {
        title: '儀錶板',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: '使用者',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: '產品',
        path: '/dashboard/products',
        icon: <MdShoppingBag />,
      },
      {
        title: '交易',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: '分析',
    list: [
      {
        title: '收入',
        path: '/dashboard/revenue',
        icon: <MdWork />,
      },
      {
        title: '報告',
        path: '/dashboard/reports',
        icon: <MdAnalytics />,
      },
      {
        title: '團隊',
        path: '/dashboard/teams',
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: '個人相關',
    list: [
      {
        title: '設定',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: '幫助',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const { user } = await auth();
  return (
    <div className={styles.container}>
      {/* avatar container */}
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user.img || '/noavatar.png'}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          登出
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
