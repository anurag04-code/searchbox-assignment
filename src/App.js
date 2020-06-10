import React from 'react'
import './styles.css'
import {Card, CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap'
import data from './data.js'
	
class App extends React.Component  {
	constructor(props) {
    super(props);
    this.myRef = React.createRef();
	this.state = {
		searchTerm : '',
		searchResult : []
	}
	this.handleChange = this.handleChange.bind(this)	
  }
	handleChange(event) {
		this.setState({
			searchTerm : event.target.value
		})
		const results = data.filter(term => term.name.toLowerCase().includes(this.searchTerm))
		if(results === null){
			results = []
		}
			this.setState({
				searchResult : results
			})
	}
	componentDidMount() {
    	this.moveFocus();
  	}
  moveFocus() {
    const node = this.myRef.current;
    node.addEventListener('keydown', function(e) {
      const active = document.activeElement;
      if(e.keyCode === 40 && active.nextSibling) {
        active.nextSibling.focus();
      }
      if(e.keyCode === 38 && active.previousSibling) {
        active.previousSibling.focus();
      }
    });
  }
	render(){
	return(
			<div className='container'>
				<input type='text' placeholder='Search...' className='Search' value={this.searchTerm} onChange={this.handleChange}/>
				{this.searchResult.map(item =>
					<Card className='card' ref={this.myRef}>
						<CardTitle>{item.id}</CardTitle>
						<CardSubtitle>{item.name}</CardSubtitle>			  
						<CardBody>
							<CardText>{item.address}</CardText>
						</CardBody>
					</Card>			  
								 )}
			</div>)
}
}
export default App