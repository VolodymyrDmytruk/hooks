import { useState,  useEffect } from 'react';
import './App.css';

export default function App() {
	const [inputValue, setInputValue] = useState();

	useEffect(() => {
		const storedData = localStorage.getItem('appData');
		if (storedData) {
			setInputValue(storedData);			
		}
	}, []);

	const inputChange = (e) => {
		const newValue = e.target.value;
		 setInputValue(newValue);
		 localStorage.setItem('appData', newValue);
	 };

  return (
    <div>
      React Marathon, appData: <input size='5' value={inputValue} onChange={inputChange} type="text"/>
    </div>
  );
}
