import "./textRotation.css";

const TextRotation = ({ text }) => {
  const len = text.length;
  const rotateAngle = 360 / len;

  return (
    <div className="text-rotate-main">
      {text.split("").map((item, index) => {
        const angle = index * rotateAngle;
        const radius = 100;
        const x = Math.floor(radius * Math.cos((angle * Math.PI) / 180));
        const y = Math.floor(radius * Math.sin((angle * Math.PI) / 180));
        const axisRotate = angle + 90;
        return (
          <span
            className="span-single"
            style={{
              transform: `translate(${x}px, ${y}px) rotate(${axisRotate}deg)`,
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default TextRotation;
