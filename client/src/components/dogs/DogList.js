import React from 'react';
import Dog from './Dog';
import { Grid, Container } from 'semantic-ui-react';
import { DogConsumer } from '../../providers/DogProvider'
import DogForm from './DogForm'

const DogList2 = () => (
 

 <>
    <Container>
    <DogForm />
<Grid columns={3}  >
<Grid.Row>
  <DogConsumer>
    { value => (
    <>
      { value.dogs.map( a =>
        <Grid.Column>
          <Dog key={a.id}  {...a} />
        </Grid.Column> 
        )
      }
    </>
                      
    )}
  
  </DogConsumer>
       
</Grid.Row>
  </Grid>     
                      </Container>
</>
    
)

export default DogList2;