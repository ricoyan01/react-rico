import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

export class NewsUpdate extends Component {
    render() {
        
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imageUrl} alt="..." height="200px" />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                <Button variant="primary" href={newsUrl}>Details</Button>
              </Card.Body>
            </Card>
          );
    }
}

export default NewsUpdate