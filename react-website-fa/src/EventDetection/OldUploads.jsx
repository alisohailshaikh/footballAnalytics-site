import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material"

function OldUploads({items}) {
    const cards = items.map((value, index) => 
            <Grid
              key={value}
              item
              md={12}
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
                    {value}
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
             )

    console.log(cards)

    return (
        <div>
            {cards.map(value => {
                return value
            })}
        </div>
    )
}

export default OldUploads