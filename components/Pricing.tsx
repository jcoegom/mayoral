import styles from "../styles/Pricing.module.css";
import Gap from "./Gap";
type PricingProps = {
  price: number;
  discount?: number;
  currency: string;
};

const Pricing = ({ price, discount, currency = "€" }: PricingProps) => {
  //Componente de vista. Muestra el precio o bien el precio más el precio tras descuento en el caso de ser necesario.
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
