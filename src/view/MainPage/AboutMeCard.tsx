import { Card, CardContent, Grid } from '@mui/material';
import FitImage from '../../components/images/FitImage';

export default function AboutMeCard() {
    return (
        <Card
            style={{
                padding: 0,
            }}
        >
            <CardContent
                style={{
                    padding: 0,
                }}
            >
                <Grid
                    container
                    spacing={0}
                >
                    <Grid
                        item
                        xs={2}
                    >
                        <FitImage
                            height='100%'
                            src={require('../../resources/MainPage/joel_campos_profile.jpg')}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={10}
                        style={{
                            paddingLeft: '2em',
                        }}
                    >
                        <h1>Joel Campos Oliva</h1>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}