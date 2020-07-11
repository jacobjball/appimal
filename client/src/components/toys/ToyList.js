import React from 'react';
import Toy from './Toy';
import { Grid, Container } from 'semantic-ui-react';
import { ToyConsumer } from '../../providers/ToyProvider'
import ToyForm from './ToyForm'

const ToyList = () => (
 

 <>
    <Container>
    <ToyForm />
<Grid columns={3}  >
<Grid.Row>
  <ToyConsumer>
    { value => (
    <>
      { value.toys.map( a =>
        <Grid.Column>
          <Toy key={a.id}  {...a} />
        </Grid.Column> 
        )
      }
    </>
                      
    )}
  
  </ToyConsumer>
       
</Grid.Row>
  </Grid>     
                      </Container>
</>
    
)

export default ToyList;