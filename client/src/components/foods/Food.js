import React, { Component } from 'react';
import { Header, Card, Button } from 'semantic-ui-react';
import FoodForm from './FoodForm';
import { FoodConsumer } from '../../providers/FoodProvider';



class Food extends Component {

  state = { editing: false }

  toggleEdit = () => (
      this.setState({ editing: !this.state.editing })
  )

  render() { 
    const { id, name, deleteFood, } = this.props
    const {editing} = this.state 
    
    return (           
      <Card.Group>
      <Card>
        <Card.Content>
        { editing ? <FoodForm id={id} name={name}
            toggleEdit={this.toggleEdit}/> :
          <>
            <Card.Header>{name}</Card.Header>
            {/* <Card.Meta>{cost}  </Card.Meta> */}
            <Card.Description>  

              
              {/* {color} */}
           
            
            </Card.Description>  
          </>
        }
        </Card.Content>
        <Card.Content>
          <Button basic color='blue' onClick={this.toggleEdit}>
            Edit
          </Button>
          <Button basic color='red' onClick={() => deleteFood(id)} >
            Delete
          </Button>
        </Card.Content>
      </Card>

      </Card.Group>               
    )        
  }
        
}

const ConnectedFood = (props) => (
    <FoodConsumer>
        { value => (
            <Food
            {...props }
            deleteFood={value.deleteFood} 
            // updateAppt={value.updateAppt}
            />
        )}
    </FoodConsumer>
)


export default ConnectedFood;