import { Card, CardContent, Grid, IconButton } from '@mui/material';
import FitImage from '../../components/images/FitImage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

type Social = {
    icon: JSX.Element;
    link: string;
}

const social: Social[] = [
    {
        icon: <LinkedInIcon/>,
        link: 'https://www.linkedin.com/in/joelcamposoliva/',
    },
    {
        icon: <GitHubIcon/>,
        link: 'https://github.com/TheMineWay',
    },
];

const navigate = (url: string) => {
    window.open(url, '_blank');
}

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
                        xs={12}
                        sm={3}
                        md={4}
                    >
                        <FitImage
                            height='100%'
                            src={require('../../resources/MainPage/joel_campos_profile.jpg')}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={9}
                        md={8}
                        style={{
                            paddingLeft: '2em',
                            paddingBottom: '2em',
                            display: 'flex',
                            alignContent: 'space-between',
                            flexDirection: 'column',
                            alignItems: 'stretch',
                        }}
                    >
                        <div
                            style={{
                                height: '100%',
                            }}
                        >
                            <h1>Joel Campos Oliva</h1>
                        </div>
                        <div>
                            {
                                social.map((s) => (
                                    <IconButton
                                        color='primary'
                                        onClick={() => navigate(s.link)}
                                    >
                                        {s.icon}
                                    </IconButton>
                                ))
                            }
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}