import "./Label.scss";
export interface LabelProps {
    /**  Sets the size*/
    size?: "medium" | "small";
    /**  Sets the text color */
    foregroundColor?: string;
    /**  Sets the background color */
    backgroundColor?: string;
    /**  Sets the label text */
    children: string;
}
declare const Label: ({ size, foregroundColor, backgroundColor, children, }: LabelProps) => JSX.Element;
export default Label;
