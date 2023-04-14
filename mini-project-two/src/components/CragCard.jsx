import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CragCard({ title, description, region, town, id, type }) {
    const navigate = useNavigate()
    return (
        <div className='card'>
            <Card onClick={() => navigate('/crags/' + id)} sx={{ minWidth: '50vvw', maxWidth: '50vw', borderRadius: "20px", mb: '40px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"

                        image="https://images.unsplash.com/photo-1516592673884-4a382d1124c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="climbing rope"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Divider />
                        <Typography gutterBottom variant="h6" component="div">
                            {type}
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Divider />

                        <Typography variant="body2" color="text.secondary">
                            {town} {region}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default CragCard