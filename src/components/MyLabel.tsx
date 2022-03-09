import "./myLabel.css";

export interface MyLabelProps {
  /**
   * Este es el mensaje
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Todas las letras en mayuscula
   */
  allCaps?: boolean;
  /**
   * El tipo de color
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * El tipo de color de la fuente
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{color:fontColor}}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
