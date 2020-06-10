import React from 'react'
import './styles.css'
import {Card, CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap'
const List = ({searchResult, searchTerm}) => {
	if(searchTerm)
	{	return(
			searchResult.map((item,i) => 
				<Card>
					<CardTitle>{item.id}</CardTitle>
					<CardSubtitle>{item.name}</CardSubtitle>
					<CardBody>
						<CardText>{item.address}</CardText>
					</CardBody>
				</Card>)
	)}
	else{
		return(null)
		}	
}

export default List