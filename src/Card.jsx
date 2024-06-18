import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const cardsArray = [{image:"test" , title: "test2", description: "test3"}, {image:"test" , title: "test2", description: "test3"}, {image:"test" , title: "test2", description: "test3"}, {image:"test" , title: "test2", description: "test3"}, {image:"test" , title: "test2", description: "test3"}];

function Cards() {
   

    return (

        <div className='row gap-3 '>
       { cardsArray.map(element=>{
            return  <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.distancecme.com/wp-content/uploads/2018/05/Lightening-scaled.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go Somewhere</Button>
            </Card.Body>
        </Card>
        }) }</div>
    );
}

export default Cards;