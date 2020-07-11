import React, { Component } from 'react';
import { Header, Card, Button } from 'semantic-ui-react';
import DogForm from './DogForm';
import { DogConsumer } from '../../providers/DogProvider';



class Dog extends Component {

  state = { editing: false }

  toggleEdit = () => (
      this.setState({ editing: !this.state.editing })
  )

  render() { 
    const { id, name, breed, age, deleteDog, } = this.props
    const {editing} = this.state 
    
    return (           
      <Card.Group>
      <Card>
        <Card.Content>
        { editing ? <DogForm id={id} name={name} breed={breed} age={age}
            toggleEdit={this.toggleEdit}/> :
          <>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{breed} </Card.Meta>
            <Card.Description>  

              
              {age}
           
            
            </Card.Description>  
          </>
        }
        </Card.Content>
        <Card.Content>
          <Button basic color='blue' onClick={this.toggleEdit}>
            Edit
          </Button>
          <Button basic color='red' onClick={() => deleteDog(id)} >
            Delete
          </Button>
        </Card.Content>
      </Card>

      </Card.Group>               
    )        
  }
        
}

const ConnectedDog = (props) => (
    <DogConsumer>
        { value => (
            <Dog
            {...props }
            deleteDog={value.deleteDog} 
            // updateAppt={value.updateAppt}
            />
        )}
    </DogConsumer>
)


export default ConnectedDog;