interface Props {
	children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, onClick, type = 'button' }: Props) => {
	return (
		<button onClick={onClick} className='h-10 px-3 text-base font-bold transition-all duration-75 ease-in border-none rounded-md w- bg-lime-400 w text-zinc-600 pointer hover:text-lime-400 hover:bg-zinc-600 w-50' type={type}>
			{children}
		</button>
	);
};

export default Button;
