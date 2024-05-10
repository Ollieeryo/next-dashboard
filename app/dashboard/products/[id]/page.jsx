import { updateProduct } from '@/app/lib/action';
import { fetchProduct } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={'/noavatar.png'} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>名稱</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>價錢</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>庫存</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>顏色</label>
          <input type="text" name="color" placeholder={product.color || 'color'} />
          <label>Size</label>
          <textarea type="text" name="size" placeholder={product.size || 'size'} />
          <label>種類</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>說明</label>
          <textarea name="desc" id="desc" rows="10" placeholder={product.desc}></textarea>
          <button>更新</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
