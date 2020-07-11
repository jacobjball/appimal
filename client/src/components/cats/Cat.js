import React, { Component } from 'react';
import { Header, Card, Button } from 'semantic-ui-react';
import CatForm from './CatForm';
import { CatConsumer } from '../../providers/CatProvider';



class Cat extends Component {

  state = { editing: false }

  toggleEdit = () => (
      this.setState({ editing: !this.state.editing })
  )

  render() { 
    const { id, name, color, cost, deleteCat, } = this.props
    const {editing} = this.state 
    
    return (           
      <Card.Group>
      <Card>
        <Card.Content>
        { editing ? <CatForm id={id} name={name} color={color} cost={cost}
            toggleEdit={this.toggleEdit}/> :
          <>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{cost} dollars </Card.Meta>
            <Card.Description>  

              
              {color}
           
            
            </Card.Description>  
          </>
        }
        </Card.Content>
        <Card.Content>
          <Button basic color='blue' onClick={this.toggleEdit}>
            Edit
          </Button>
          <Button basic color='red' onClick={() => deleteCat(id)} >
            Delete
          </Button>
        </Card.Content>
      </Card>

      </Card.Group>               
    )        
  }
        
}

const ConnectedCat = (props) => (
    <CatConsumer>
        { value => (
            <Cat
            {...props }
            deleteCat={value.deleteCat} 
            // updateAppt={value.updateAppt}
            />
        )}
    </CatConsumer>
)


export default ConnectedCat;