import React, { Component } from 'react';
import { Form, Dropdown } from 'semantic-ui-react';
import { DogConsumer } from '../../providers/DogProvider';
import { AuthConsumer }  from '../../providers/AuthProvider';


class DogForm extends Component {

  state = {errors: {length: ''}, name: '', length: '', age: '', breed:''}

  componentDidMount() {
    
    
      if (this.props.id) {
          const { name, breed, age } = this.props
          this.setState({ name, breed, age})
      }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });



  handleSubmit = (e) => {
    
    e.preventDefault()
    if (this.props.id) {
        this.props.updateDog(this.props.id, this.state, this.props.userId)
        this.props.toggleEdit()

    } else { 
    this.props.addDog(this.state, this.props.userId)
    }
    this.setState({name: '', breed: '', age: ''})
  }

  render() {
    const { name, breed, age } = this.state;

    return(
      
      <> 
      <Form onSubmit= {this.handleSubmit}>
        <Form.Input
        name='name'
        value={name}
        onChange={this.handleChange}
        
        required
        label='name'
          
        />

        
          <Form.Input
          
          name='breed'
          value={breed}
          onChange={this.handleChange}
          required
          label='Breed'
        /> 
 


          <Form.Input
          
          name='age'
          value={age}
          onChange={this.handleChange}
          required
          label='Age'
        />
 
  
        <Form.Button color='red'>Submit</Form.Button>
      </Form>
      </>
    )
  }
}
const ConnectedDogForm = (props) => (
  <DogConsumer>
    {value => (
        <DogForm
        { ...props }
        addDog={value.addDog}
        updateDog={value.updateDog}
        />
    )}
  </DogConsumer>
)

export default ConnectedDogForm;
