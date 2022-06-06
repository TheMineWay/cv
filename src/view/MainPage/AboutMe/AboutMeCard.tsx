import { Card, CardContent, Grid, IconButton } from '@mui/material';
import FitImage from '../../../components/images/FitImage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

type Social = {
    icon: JSX.Element;
    link: string;
}

const social: Social[] = [
    {
        icon: <LinkedInIcon fontSize='large'/>,
        link: 'https://www.linkedin.com/in/joelcamposoliva/',
    },
    {
        icon: <GitHubIcon fontSize='large'/>,
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
                            src={require('../../../resources/MainPage/joel_campos_profile.jpg')}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={9}
                        md={8}
                        style={{
                            paddingLeft: '2em',
                            paddingRight: '2em',
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
                            <p
                                style={{
                                    textAlign: 'justify',
                                }}
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur ante in tortor vehicula tincidunt. Nam at pharetra diam. Maecenas dapibus lacus id metus eleifend, eu posuere nisi porta. Phasellus nisl sem, pharetra ut pharetra ac, molestie vel enim. Suspendisse enim lorem, dapibus quis mauris a, ultricies efficitur risus. Donec tincidunt auctor tortor a consectetur. Fusce sagittis laoreet malesuada. Vivamus vitae lacus sit amet justo mattis eleifend. Nulla eu semper nisi, non gravida mi. Mauris porta odio enim, et ornare nibh tristique a. Sed non faucibus metus, vel volutpat ligula. Nam ac lacus a ante cursus elementum. Praesent hendrerit porta felis, at accumsan sapien tincidunt at. Ut finibus tortor odio, non viverra mi rutrum sed. Vestibulum nisl massa, tristique eget tristique convallis, ultrices at orci. Vestibulum lorem purus, laoreet sed erat et, vestibulum mattis mauris.</p>
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