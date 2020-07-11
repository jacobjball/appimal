import React, { Component } from 'react';
import { Form, Dropdown } from 'semantic-ui-react';
import { CatConsumer } from '../../providers/CatProvider';



class CatForm extends Component {

  state = {errors: {length: ''}, name: '', length: '', date: '', time: '', address: '', phone: ''}

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
        this.props.updateCat(this.props.id, this.state)
        this.props.toggleEdit()

    } else { 
    this.props.addCat(this.state)
    }
    this.setState({name: '', cost: '', color: ''})
  }

  render() {
    const { name, cost, color } = this.state;
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
        {/* <Form.Input
        name='length'
        value={length}
        onChange={this.handleChange}
        required
        label='length (minutes)'
        placeholder='(Customize Length)'
        />    */}

        {/* {errors.length.length > 0 && <span>{errors.length}</span>} */}

        {/* <Dropdown
        placeholder='Choose Length: 30, 60, 90'
        fluid
        selection
        options={apptLength}
        onChange={this.handleChangeLength}
        /> */}
        
          <Form.Input
          
          name='cost'
          value={cost}
          onChange={this.handleChange}
          required
          label='Cost'
        /> 
 


          <Form.Input
          
          name='color'
          value={color}
          onChange={this.handleChange}
          required
          label='Color'
        />
 
  
        <Form.Button color='red'>Submit</Form.Button>
      </Form>
      </>
    )
  }
}
const ConnectedCatForm = (props) => (
  <CatConsumer>
    {value => (
        <CatForm
        { ...props }
        addCat={value.addCat}
        updateCat={value.updateCat}
        />
    )}
  </CatConsumer>
)

export default ConnectedCatForm;
