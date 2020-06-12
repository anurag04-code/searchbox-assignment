import React from 'react'
import './styles.css'
import data from './data.js'
import List from './List.js'

const App = () => {
	const [searchTerm,setSearchTerm] = React.useState('')
	const [searchResult,setSearchResult] = React.useState([])
	const [active,setactive] = React.useState(null)
	
    const handleChange = event => {
   		 setSearchTerm(event.target.value);
  	}
	const handlekey = event => {
		if(event.key === 'ArrowDown'){
			if(active === null){
				setactive(0)
			}
			else{
				if(active === searchResult.length){
					setactive(0)
				}else
				{setactive(active + 1)}
			}
		}
		if(event.key === 'ArrowUp'){
			if(active !== 0 && active<=searchResult.length){
				setactive(active - 1)
			}
		}
	}
	 React.useEffect(() => {
    const results = data.filter(person =>person.name.toLowerCase().includes(searchTerm)
    );
    setSearchResult(results);
  }, [searchTerm]);
	return(
		<div className='container'>
			<input className='Search' type='text' value={searchTerm} placeholder='Search..' onChange={handleChange} onKeyDown={handlekey}></input>
			<List searchResult={searchResult} searchTerm={searchTerm} active={active}/>	
		</div>
	)
}
export default App