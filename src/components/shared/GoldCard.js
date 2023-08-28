import Image from "next/image";
import Ntv from "/public/assets/img/homepage/hero-ntv.png";
const GoldCard = ({
  marginTop = "",
  borderRadius = "10px",
  border = "1px solid #665832",
}) => {
  return (
    <div
      className="gold_card"
      style={{
        marginTop: marginTop,
        borderRadius: borderRadius,
        border: border,
      }}
    >
      <div className="d-flex justify-content-center align-items-center flex-column">
        <Image
          src={Ntv}
          alt=""
          width={176}
          height={176}
          className="gold_card_img"
        />
        <h4 className="gold_card_img_heading2">
          DEUTSCHLANDS BESTE ONLINE-PORTALE 2023
        </h4>
        <h2 className="gold_card_img_heading3">
          <i className="fa fa-star" style={{ fontSize: "25px" }}></i>{" "}
          GESAMTSIEGER{" "}
          <i className="fa fa-star" style={{ fontSize: "25px" }}></i>
        </h2>
      </div>
    </div>
  );
};

export default GoldCard;
