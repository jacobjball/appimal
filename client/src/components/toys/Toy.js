import React, { Component } from 'react';
import { Header, Card, Button } from 'semantic-ui-react';
import ToyForm from './ToyForm';
import { ToyConsumer } from '../../providers/ToyProvider';



class Toy extends Component {

  state = { editing: false }

  toggleEdit = () => (
      this.setState({ editing: !this.state.editing })
  )

  render() { 
    const { id, name, color, cost, deleteToy, } = this.props
    const {editing} = this.state 
    
    return (           
      <Card.Group>
      <Card>
        <Card.Content>
        { editing ? <ToyForm id={id} name={name} color={color} cost={cost}
            toggleEdit={this.toggleEdit}/> :
          <>
            <Card.Header>{name}</Card.Header>
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
          <Button basic color='red' onClick={() => deleteToy(id)} >
            Delete
          </Button>
        </Card.Content>
      </Card>

      </Card.Group>               
    )        
  }
        
}

const ConnectedToy = (props) => (
    <ToyConsumer>
        { value => (
            <Toy
            {...props }
            deleteToy={value.deleteToy} 
            // updateAppt={value.updateAppt}
            />
        )}
    </ToyConsumer>
)


export default ConnectedToy;