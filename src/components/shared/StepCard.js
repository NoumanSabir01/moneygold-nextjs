import Image from "next/image";

const StepCard = ({
  heading,
  src,
  alt = "image",
  para,
  marginTop = "",
  marginBottom = "",
  border = "1px solid #3a3a3c",
  borderRadius = "10px",
}) => {
  return (
    <div
      className="step_card"
      style={{
        marginTop: marginTop,
        border: border,
        borderRadius: borderRadius,
        marginBottom: marginBottom,
      }}
    >
      <div className="step_card_header">
        <h2 className="step_card_heading">{heading}</h2>
      </div>
      <div className="step_card_body">
        <Image src={src} alt={alt} />
        <p className="text-center">{para}</p>
      </div>
    </div>
  );
};

export default StepCard;
