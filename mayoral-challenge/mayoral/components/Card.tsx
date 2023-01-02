import Image from "next/image";

type CardProps = {
  srcImg: string;
  altImg?: string;
  Content: React.ReactNode;
};

const Card = ({ srcImg, altImg, Content }: CardProps) => {
  return (
    <div>
      <Image src={""} width={128} height={77} alt={""} />
      {Content}
      <button>AÑADIR</button>
    </div>
  );
};

export default Card;
