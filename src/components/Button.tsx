interface Props {
	children?: React.ReactNode
	onClick?: () => void
	type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, onClick, type = 'button' }: Props) => {
	return (
		<button onClick={onClick} className='no-underline btn btn-primary underline-offset-0' type={type}>
			{children}
		</button>
	)
}

export default Button
