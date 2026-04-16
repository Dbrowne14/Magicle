import type { Value } from "../../../types/types";
import { wubrg } from "../../../data/pipDataStructure";

interface CardValueProps {
  label: string;
  value: Value;
}

export const CardValue = ({ label, value }: CardValueProps) => {
  const handlePips = (pip: string) => {
    console.log(`[DEBUG] Processing pip: "${pip}"`)
    switch (pip) {
      case "G":
        return wubrg.forest;
      case "U":
        return wubrg.island;
      case "R":
        return wubrg.mountain;
      case "B":
        return wubrg.swamp;
      case "W":
        return wubrg.plains;
      case "colorless":
        return wubrg.colorless;
      default: 
      console.log(`[DEBUG] No match found for pip: "${pip}"`); // Catch unhandled symbols
      return;
    }
  };
  const handleValue = () => {
    if (label === "price") {
      return "$" + value;
    }

    return value;
  };

  switch (label) {
    case "pips":
      return (
        <div className="flex flex-row justify-center gap-1 h-full">
          {Array.isArray(value) &&
            value.map((img, index) => {
              const src = handlePips(img);

              console.log("pip:", img, "→ src:", src); //
              return (
                <img
                  key={index}
                  id={label}
                  src={handlePips(img)}
                  className="h-full p-[0.1rem] size-[24.8px]"
                  alt={img}
                />
              );
            })}
        </div>
      );
    case "icon_svg_uri":
      if (typeof value === "string") {
        return <img src={value} className="h-full p-[0.1rem]" alt="icon" />;
      }
      return null;
    default:
      return <div className="h-[50%]">{handleValue()}</div>;
  }
};
