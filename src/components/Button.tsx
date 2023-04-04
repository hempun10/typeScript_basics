interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClickhandle: () => void;
}
const Button = ({ children, color = "primary", onClickhandle }: Props) => {
  return (
    <>
      <button className={"btn btn-" + color} onClick={onClickhandle}>
        {children}
      </button>
    </>
  );
};

export default Button;
