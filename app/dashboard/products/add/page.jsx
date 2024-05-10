import { addProduct } from '@/app/lib/action';
import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css';

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="名稱" name="title" required />
        <select name="cat" id="cat">
          <option value="general">選擇種類</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="價錢" name="price" required />
        <input type="number" placeholder="庫存" name="stock" required />
        <input type="text" placeholder="顏色" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea required name="desc" id="desc" rows="16" placeholder="說明"></textarea>
        <button type="submit">確認</button>
      </form>
    </div>
  );
};

export default AddProductPage;
