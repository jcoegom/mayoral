import styles from "../styles/Pricing.module.css";
type PricingProps = {
  price: number;
  discount?: number;
  currency: string;
};

const Pricing = ({ price, discount, currency = "€" }: PricingProps) => {
  const finalPrice = discount ? +price * (1 - discount / 100) : price;
  return (
    <div className={styles.main}>
      {discount ? (
        <>
          <div className={styles.oldPrice}>{`${price} ${currency}`}</div>
          <div
            className={styles.newPrice}
          >{`${finalPrice} ${currency} (-${discount}%)`}</div>
        </>
      ) : (
        <div>{`${price} ${currency}`}</div>
      )}
    </div>
  );
};

export default Pricing;
