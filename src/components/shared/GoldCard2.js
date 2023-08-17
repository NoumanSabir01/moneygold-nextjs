import Image from "next/image";
import GoldZuruck from "/public/assets/img/homepage/nur_noch_gold_zuruck.png";
const GoldCard2 = ({
  marginTop = "20px",
  borderRadius = "10px",
  border = "1px solid #665832",
}) => {
  return (
    <div
      className="gold_card2"
      style={{
        marginTop: marginTop,
        borderRadius: borderRadius,
        border: border,
      }}
    >
      <div className="d-flex justify-content-center align-items-center flex-column">
        <Image
          src={GoldZuruck}
          alt=""
          width={183}
          height={183}
          className="gold_card_img"
        />
        <p className="gold_card2_para">
          Mit unserer Gold zurück Garantie gehen Sie bei moneyGold.de kein
          Risiko ein.
        </p>
      </div>
    </div>
  );
};

export default GoldCard2;
