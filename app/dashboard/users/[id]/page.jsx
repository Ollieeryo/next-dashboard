import { updateUser } from '@/app/lib/action';
import { fetchUser } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || '/noavatar.png'} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>使用者名稱</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>密碼</label>
          <input type="password" name="password" />
          <label>電話</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>地址</label>
          <textarea type="text" name="address" placeholder={user.address} />
          <label>是否為管理者?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              是
            </option>
            <option value={false} selected={!user.isAdmin}>
              否
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              是
            </option>
            <option value={false} selected={!user.isActive}>
              否
            </option>
          </select>
          <button>更新</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
