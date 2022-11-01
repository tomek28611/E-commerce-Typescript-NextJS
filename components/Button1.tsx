interface Props {
    title : string;
    ocClick?: () => void;
    width?: string;
    loading?: boolean;
    padding?: string;
    noIcon?: boolean;
}

function Button({title}: Props) {
  return (
    <button>Button</button>
  )
}

export default Button