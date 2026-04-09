import { AdvancedMarker } from "@vis.gl/react-google-maps";
import train from "../assets/train-front.svg";

interface Props {
  color: string;
  position: object;
}

function Train({ color, position }: Props) {
  return (
    <AdvancedMarker position={position}>
      <img
        src={train}
        alt="Train"
        className="rounded-3"
        style={{
          width: 20,
          height: 20,
          background: color,
        }}
      />
    </AdvancedMarker>
  );
}

export default Train;
