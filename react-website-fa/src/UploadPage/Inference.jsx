import { Alert, AlertTitle, Button, CardMedia, Container, Grid, Link, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ResponsiveAppBar from "../NavBar/NavBarNew";
import { useEffect, useState } from "react";

function Inference(props) {
    const { uploadId } = useParams()
    const [taskId, setTaskId] = useState(null)
    const [err, setErr] = useState('')
    const [result, setResult] = useState({})

    const fetchResult = async (task_id) => {
        try {
            const response = await fetch(`http://localhost:5000/result/${task_id}`)
            if (response.ok) {
                const res = await response.json()
                setResult(res)
            }

        } catch (err) {
            setErr('Error while fetching details, try again.')
            console.log(err)
        }
    }

    const startInference = async () => {

        if (localStorage.getItem('upload_id') === uploadId) {
            if (localStorage.getItem('task_id')) {
                const task_id = localStorage.getItem('task_id')
                setTaskId(task_id)
                fetchResult(task_id)
            }
            return
        }

        try {
            const response = await fetch(`http://localhost:5000/infer/${uploadId}`, {
                method: 'GET'
            })
            if (response.ok) {
                const res = await response.json()
                localStorage.setItem('upload_id', uploadId)
                localStorage.setItem('task_id', res.result_id)
                setTaskId(res.result_id)
            }
        } catch (err) {
            console.log(err)
            setErr('Error while connecting to the server.')
        }
    }

    const onGetStatus = async () => {
        if (taskId === '' || !taskId) {
            setErr('Cannot fetch details, task not set. Please try again.')
            return
        }
        fetchResult(taskId)
    }

    useEffect(() => {
        startInference()
    }, [])

    return (
        <div>
            <ResponsiveAppBar />
            <Grid
                container
                direction={'column'}
                sx={{
                    background: '#201A2B',
                    color: 'white',
                    padding: 4
                }}
            >
                <Grid item md={12}>
                    <Typography variant="h4">
                        Inference Status
                    </Typography>
                    {result && taskId &&
                        <Typography gutterBottom>
                            Task ID: {taskId} | {result.ready ? 'Ready' : 'In Process'} | {result.successful ? 'Succesfuly Completed' : result.status}
                        </Typography>
                    }
                </Grid>

                <Grid item marginTop={1}>
                    <Button
                        variant="contained"
                        onClick={onGetStatus}
                    >
                        Get Status
                    </Button>

                    <Button
                        variant="contained"
                        disabled={!result || !result.ready}
                        sx={{
                            marginLeft: 1
                        }}
                    >
                        View Insights
                    </Button>
                </Grid>

                <Grid item marginTop={1}>
                    <Typography variant="h5" gutterBottom>
                        Proccessed Videos
                    </Typography>
                    <Typography>
                        Videos will appear below after successfull execution of process. Click Get Status to update.
                    </Typography>
                </Grid>
            </Grid>

            {result && result.value &&
                <Grid
                    container
                    spacing={2}
                    sx={{
                        background: '#201A2B',

                    }}
                >
                    <Grid item xs={6}>
                        <CardMedia
                            src={result.value[0]}
                            component={'video'}
                            autoPlay
                            controls
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CardMedia
                            height={550}
                            src={result.value[1]}
                            component={'video'}
                            autoPlay
                            controls
                        />
                    </Grid>
                </Grid>
            }

            {
                err ?
                    <Alert severity="error" variant='filled'>
                        <AlertTitle>Error</AlertTitle>
                        {err}
                    </Alert> :
                    null
            }


        </div>
    )

}

export default Inference;