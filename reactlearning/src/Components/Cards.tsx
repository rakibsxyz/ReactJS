import React from 'react'
import { Card } from 'react-bootstrap'
import './cardCss.css'

function Cards() {
    return (
        <div className='row'>
            <div className="col-sm">
            <Card bg='light' text="dark" className="Cards">
                <Card.Body style={{ margin: "10px" }}>
                    {/* <Link to={`/news/${id}`} > */}
                        <Card.Title>
                         
                            <Card.Link href="#"></Card.Link>
                        </Card.Title>
                    {/* </Link> */}
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                       Card Text
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
            
        </div>
    )
}

export default Cards
