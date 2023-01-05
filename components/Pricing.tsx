import styles from "../styles/Pricing.module.css";
import Gap from "./Gap";
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
          <div
            data-testid="pricing-discount"
            className={styles.oldPrice}
          >{`${price} ${currency}`}</div>
          <div
            className={styles.newPrice}
          >{`${finalPrice} ${currency} (-${discount}%)`}</div>
        </>
      ) : (
        <>
          <Gap size={"10px"} />
          <div data-testid="pricing-nodiscount">{`${price} ${currency}`}</div>
        </>
      )}
    </div>
  );
};

export default Pricing;
