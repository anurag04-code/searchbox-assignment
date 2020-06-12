import React from 'react'
import './styles.css'
import {Card, CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap'
const List = ({searchResult, searchTerm, active}) => {
	if(searchTerm)
	{	
		return(
				searchResult.map((item,i) => 
				<Card className={i === active ? 'active' : null} id={ active == null || active >= searchResult.length ? 'card' : null}>			 
					<CardTitle>{item.id}</CardTitle>
					<CardSubtitle>{item.name}</CardSubtitle>
					<CardBody>
						<CardText>{item.address}</CardText>
					</CardBody>
				</Card>				)
	)}
	else{
		return(null)
		}	
}

export default List