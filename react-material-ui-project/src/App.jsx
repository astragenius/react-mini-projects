import Button from '@mui/material/Button'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { makeStyles } from '@mui/material/styles';


function App() {

 


  return (
   <>
      <CssBaseline/>
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCameraIcon/>
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm'>

              <Typography variant='h2' align='center' color='textPrimary' gutterBottom> Photo Album</Typography>
              <Typography variant='h5' align='center' color='textSecondary' paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt corrupti dignissimos dolorum voluptatibus officia explicabo iusto  
              </Typography>

              <div>

                <Grid container spacing={2} justify="center">

                  <Grid item>

                    <Button variant='contained' color='primary'>
                        See my Photos
                    </Button>

                  </Grid>
                  
                  <Grid item>

                    <Button variant='outlined' color='primary'>
                       Secondary action
                    </Button>

                  </Grid>

                </Grid>

              </div>

          </Container>
          <Container maxWidth='md'>
            <Grid container spacing={4}>

              <Grid item>
                <Card>
                  <CardMedia
                    image='assets/react.svg'
                  />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti eveniet inventore provident iusto! Placeat ipsum veniam maxime! Fuga alias illum reiciendis excepturi et velit odio sed ut doloremque consectetur.
                </Card>
              </Grid>

            </Grid>

          </Container>

        </div>
      </main>
   </>
  )
}

export default App
