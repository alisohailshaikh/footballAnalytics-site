import { getStorage, ref, uploadBytesResumable, listAll } from 'firebase/storage'
import {
  LinearProgress, AlertTitle,
  Alert, Button,
  FormControl, Container,
  Grid, Typography, Card,
  CardContent,
  CardActions
} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useEffect, useState } from 'react'
import ResponsiveAppBar from '../NavBar/NavBarNew'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'

function UploadVideo(props) {

  const [file, setFile] = useState(null)
  const [uploadId, setUploadId] = useState('')
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const storage = getStorage()
  const navigate = useNavigate()

  // useEffect(() => {
  //   const videosRef = ref(storage, '')
  //   listAll(videosRef)
  //     .then(res => {
  //       res.items.forEach((itemRef) => {
  //         console.log(itemRef.name)
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
    
  // }, [])

  // Set file after it's uploaded
  const getFileUrl = (e) => {
    let value = e.target.files[0]
    setError('')
    setFile(value)
  }

  const reset = (e) => {
    setError('')
    setFile(null)
    setSuccess(false)
    setUploadProgress(0)
    setUploadId('')
  }

  // Upload the selected file to firebase cloud storage
  const uploadVideoToFirebase = async (e) => {
    // show error if the file is null
    if (file == null) {
      setError('Please select a file to upload')
      return
    }
    const unique_id = uuidv4()
    const videoRef = ref(storage, `upload/${unique_id}${file.name}`)
    setUploadId(`${unique_id}${file.name}`)

    const uploadTask = uploadBytesResumable(videoRef, file);
    uploadTask.on('state_changed', (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      progress = Math.trunc(progress)
      setUploadProgress(progress)
    }, (error) => {
      setError('Error while uploading video, please try again')
    }, () => {
      setSuccess(true)
    })
  }

  // on inference start
  const onStart = () => {
    if (uploadId === '') {
      setError('Error in processing video, please try again.')
      return
    }

    navigate(`/detect/${uploadId}`)
  }

  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container maxWidth={"md"}>
        <Grid
          marginTop={10}
          container
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{
            background: '#201A2B',
            color: 'white',
            padding: 4
          }}
        >
          <Grid item md={12}>
            <Typography variant='h4' gutterBottom>Upload video</Typography>
          </Grid>

          <Grid
            item md={12}
            marginBottom={1}
          >
            <Button
              component='label'
              role={undefined}
              variant='contained'
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              <input type="file" accept="video/mp4, video/webm" hidden onChange={getFileUrl} />
              {file ? `Selected: ${file.name}` : "Select Video"}
            </Button>
          </Grid>

          <Grid item md={12}>
            <Typography
              gutterBottom
            >
              {file && file.name}</Typography>
          </Grid>

          <Grid item md={12}>
            <FormControl>
              <Button
                variant='contained'
                color='success'
                onClick={uploadVideoToFirebase}
                disabled={success}
              >
                Upload
              </Button>
            </FormControl>
          </Grid>

          <Grid item marginTop={2}>
            <Button
              variant='contained'
              color='primary'
              sx={{
                marginRight: 1
              }}
              disabled={!success}
              onClick={onStart}
            >
              Start
            </Button>
            <Button
              onClick={reset}
              variant='contained'
              color='warning'
            >
              Reset
            </Button>
          </Grid>

        </Grid>

        <LinearProgress
          value={uploadProgress}
          variant='determinate'
          color='primary'
          sx={{
            height: 20,
            marginBottom: 1
          }}
        />

        {
          error ?
            <Alert severity="error" variant='filled'>
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert> :
            null
        }

        {
          success ?
            <div>
              <Alert severity='success' variant='filled'>
                <AlertTitle>Success!</AlertTitle>
                Video succesfully Uploaded
              </Alert>
            </div>
            :
            null
        }

        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            md={6}
          >
            <Card
              variant='outlined'
              sx={{
                background: '#201A2B',
                color: 'white'
              }}
            >
              <CardContent>
                <Typography variant='body'>
                  Task id
                </Typography>
                <Typography>
                  ad91731d-48be-4c0e-aa04-dd7e2288aed1
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' variant='contained'>
                  View
                </Button>
                <Button size='small' variant='contained' color='error'>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

      </Container>




    </div>
  );
}

export default UploadVideo;
