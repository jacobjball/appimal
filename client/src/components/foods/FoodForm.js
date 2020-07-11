import React, { Component } from 'react';
import { Form, Dropdown } from 'semantic-ui-react';
import { FoodConsumer } from '../../providers/FoodProvider';



class FoodForm extends Component {

  state = {errors: {length: ''}, name: ''}

  componentDidMount() {
      if (this.props.id) {
          const { name, cost, color } = this.props
          this.setState({ name, cost, color})
      }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  handleChangeLength = (e, data) => {
    // console.log(data.value);
    // console.log("Hello Change Length")
    this.setState({ length: data.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
        this.props.updateFood(this.props.id, this.state)
        this.props.toggleEdit()

    } else { 
    this.props.addFood(this.state)
    }
    this.setState({name: ''})
    this.props.toggleForm();
  }

  render() {
    const { name} = this.state;
    const apptLength = [ 
      {key: '30', text: '30 min', value: '30',},
      {key: '60', text: '60 min', value: '60'},
      {key: '90', text: '90 min', value: '90'},
      {key: 'Custom', text: 'Custom', value: 'Custom'},
    ]

    return(
      //new client or edit client if statement
      <> 
      <Form onSubmit= {this.handleSubmit}>
        <Form.Input
        name='name'
        value={name}
        onChange={this.handleChange}
        
        required
        label='name'
          
        />

  
        <Form.Button color='red'>Submit</Form.Button>
      </Form>
      </>
    )
  }
}
const ConnectedFoodForm = (props) => (
  <FoodConsumer>
    {value => (
        <FoodForm
        { ...props }
        addFood={value.addFood}
        updateFood={value.updateFood}
        />
    )}
  </FoodConsumer>
)

export default ConnectedFoodForm;
