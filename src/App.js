import React from 'react'
import './styles.css'
import data from './data.js'
import List from './List.js'

const App = () => {
	const [searchTerm,setSearchTerm] = React.useState('')
	const [searchResult,setSearchResult] = React.useState([])
	
    const handleChange = event => {
   		 setSearchTerm(event.target.value);
  	}
	 React.useEffect(() => {
    const results = data.filter(person =>person.name.toLowerCase().includes(searchTerm)
    );
    setSearchResult(results);
  }, [searchTerm]);
	return(
		<div className='container'>
			<input className='Search' type='text' value={searchTerm} placeholder='Search..' onChange={handleChange}  ></input>
			<List searchResult={searchResult} searchTerm={searchTerm}/>
		</div>
	)
}
export default App