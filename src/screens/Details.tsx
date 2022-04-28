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
	const details = getTaskByTitle(title!)?.details ?? ''
  return (
		<>
			<h1 className='truncate'>{title}</h1>
			<div className='flex-wrap h-full px-4 py-5 mx-5 text-center rounded-md bg-zinc-600'>
				<span
					role='textbox'
					contentEditable
					onBlur={(e) => {
						changeDetails(title!, e.currentTarget.innerText);
					}}
					className='block w-full text-2xl font-bold whitespace-pre-wrap rounded-md outline-none resize-none pointer focus:bg-zinc-600 focus:outline-lime-400 empty:text-gray-300'
				>
					{details}
				</span>
			</div>
			<div className='flex items-end justify-end p-4'>
				<Link to='../'>
					<div className=''>
						<Button>Voltar</Button>
					</div>
				</Link>
			</div>
		</>
	);
};

export default Details;
