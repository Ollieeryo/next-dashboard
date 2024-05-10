import { addUser } from '@/app/lib/action';
import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css';

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="使用者名稱" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="密碼" name="password" required />
        <input type="phone" placeholder="電話" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>是否為管理者?</option>
          <option value={true}>是</option>
          <option value={false}>否</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Active?</option>
          <option value={true}>是</option>
          <option value={false}>否</option>
        </select>
        <textarea name="address" id="address" rows="16" placeholder="Address"></textarea>
        <button type="submit">確認</button>
      </form>
    </div>
  );
};

export default AddUserPage;
