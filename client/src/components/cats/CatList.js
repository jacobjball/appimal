import React from 'react';
import Cat from './Cat';
import { Grid, Container } from 'semantic-ui-react';
import { CatConsumer } from '../../providers/CatProvider'
import CatForm from './CatForm'

const CatList = () => (
 

 <>
    <Container>
    <CatForm />
<Grid columns={3}  >
<Grid.Row>
  <CatConsumer>
    { value => (
    <>
      { value.cats.map( a =>
        <Grid.Column>
          <Cat key={a.id}  {...a} />
        </Grid.Column> 
        )
      }
    </>
                      
    )}
  
  </CatConsumer>
       
</Grid.Row>
  </Grid>     
                      </Container>
</>
    
)

export default CatList;