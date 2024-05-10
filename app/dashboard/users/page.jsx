import { deleteUser } from '@/app/lib/action';
import { fetchUsers } from '@/app/lib/data';
import Pagination from '@/app/ui/dashboard/pagination/Pagination';
import Search from '@/app/ui/dashboard/search/Search';
import styles from '@/app/ui/dashboard/users/users.module.css';
import Image from 'next/image';
import Link from 'next/link';

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for the user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>新增</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>名字</td>
            <td>Email</td>
            <td>建立於</td>
            <td>角色</td>
            <td>狀態</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || '/noavatar.png'}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toDateString()}</td>
              <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
              <td>{user.isActive ? 'active' : 'passive'}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>查看</button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className={`${styles.button} ${styles.delete}`}>刪除</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
