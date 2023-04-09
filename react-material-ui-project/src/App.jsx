import Button from '@mui/material/Button'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';



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
              </Typography>

          </Container>
        </div>
      </main>
   </>
  )
}

export default App
