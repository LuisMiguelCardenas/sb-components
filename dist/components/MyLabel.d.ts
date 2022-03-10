/// <reference types="react" />
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
    /**
   * El tipo de color de la fuente
   */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
