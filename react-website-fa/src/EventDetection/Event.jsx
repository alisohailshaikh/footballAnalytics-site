import { Alert, AlertTitle, Button, CardMedia, Container, Grid, Link, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ResponsiveAppBar from "../NavBar/NavBarNew";
import { useEffect, useState } from "react";

function Event(props) {
    const { uploadId } = useParams()
    const [taskId, setTaskId] = useState(null)
    const [err, setErr] = useState('')
    const [result, setResult] = useState({})

    const base_api = process.env.REACT_APP_INFER_API

    const fetchResult = async (task_id) => {
        try {
            const response = await fetch(`${base_api}/infer/events/result/${task_id}`)
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
        try {
            const response = await fetch(`${base_api}/infer/events/${uploadId}`, {
                method: 'GET'
            })
            if (response.ok) {
                const res = await response.json()
                if (res.exists) {
                    const task_id = localStorage.getItem('event_task_id')
                    if (!task_id) {
                        setErr('Please view existing task results from Upload page')
                    }
                    setTaskId(task_id)
                    fetchResult(task_id)
                }
                else if (res.pending) {
                    setErr('A task with this video already exists or is in process - will appear in upload page once done.')
                }
                else {
                    setTaskId(res.result_id)
                    fetchResult(taskId)
                }
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
                        Event Detection Results
                    </Typography>

                    {result && taskId &&
                        <Typography gutterBottom>
                            Task ID: {taskId} | {result.ready ? 'Ready' : 'In Process'} | {result.successful ? 'Succesfuly Completed' :
                                result.state}
                        </Typography>
                    }
                    {result && !result.value &&
                        <Typography>
                            Do not refresh, stay on this page to see status.
                            All tasks after completion will apear on the uploads page.
                        </Typography>}
                </Grid>

                <Grid item marginTop={1}>
                    <Button
                        variant="contained"
                        onClick={onGetStatus}
                    >
                        Get Status
                    </Button>
                    {result && result.value &&
                        <a href={result.value.csv}>
                            <Button variant="contained" sx={{ marginLeft: 2 }}>
                                Download CSV
                            </Button>
                        </a>
                    }
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
                    <Grid item xs={12}>
                        <CardMedia
                            src={result.value.event_vid}
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

export default Event;