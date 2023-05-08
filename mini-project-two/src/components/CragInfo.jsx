import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { Divider } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CragLocationMap from './CragLocationMap';
import { useNavigate } from 'react-router-dom';




export default function CragInfo({ title, description, town, region, routes, location }) {
    const navigate = useNavigate()
    return (

        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={6}
                sx={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1630432328419-bee5f50d6390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >


                    <Box component="f" sx={{ mt: 1 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                {title}
                            </Typography>
                            <Divider />
                            <Typography gutterBottom variant="h6" component="div">
                                {routes} Routes
                            </Typography>
                            <Divider />
                            <Typography variant="body1" color="text.secondary">
                                {description}
                            </Typography>
                            <Divider />

                            <Typography variant="body2" color="text.secondary">
                                {town} {region}
                            </Typography>
                            <Divider />
                        </CardContent>
                        <Typography variant="h6" component="div">
                            Location
                        </Typography>
                        <CragLocationMap source={location} />
                        <Button
                            onClick={() => navigate('/crags')}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Back to all crags
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>

    );
}