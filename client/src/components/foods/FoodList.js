import React from 'react';
import Food from './Food';
import { Grid, Container } from 'semantic-ui-react';
import { FoodConsumer } from '../../providers/FoodProvider'
import FoodForm from './FoodForm'

const FoodList = () => (
 

 <>
    <Container>
    <FoodForm />
<Grid columns={3}  >
<Grid.Row>
  <FoodConsumer>
    { value => (
    <>
      { value.foods.map( a =>
        <Grid.Column>
          <Food key={a.id}  {...a} />
        </Grid.Column> 
        )
      }
    </>
                      
    )}
  
  </FoodConsumer>
       
</Grid.Row>
  </Grid>     
                      </Container>
</>
    
)

export default FoodList;