import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useStore } from "../store";
import '../styles/Details.css';


const Details = () => {
  const navigate = useNavigate();
	const { title } = useParams()
	const { getTaskByTitle, changeDetails } = useStore()
	useEffect(() => {
		if (!getTaskByTitle(title ?? "")) navigate("/error");
	}, [])
	const [details, setDetails] = useState(getTaskByTitle(title!)?.details ?? '')
  return (
		<>
			<h1 className='truncate'>{title}</h1>
			<div className='flex-wrap h-full mt-5 rounded-md bg-zinc-600'>
				<span
					role='textbox'
					contentEditable
					onBlur={(e) => {
						changeDetails(title!, e.currentTarget.innerText)
						setDetails(getTaskByTitle(title!)?.details ?? '')
					}}
					className='block text-xl whitespace-pre-wrap textarea-ghost textarea focus:textarea-primary empty:text-gray-300'
				>
					{details}
				</span>
			</div>
			<div className='flex items-end justify-end p-4'>
				<Link to='../'>
						<Button>Voltar</Button>
				</Link>
			</div>
		</>
	)
};

export default Details;
