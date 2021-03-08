import { useState } from "react";

export function Counter(){
	const [counter,setCounter] = useState(0)
	function updateValue(){
		setCounter(counter + 1)
	}
	return (
		<div>
			<h2>{counter}</h2>
			<button onClick={updateValue} type="button">
				Increment
			</button>
		</div>
	)
}