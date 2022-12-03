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
        icon: <LinkedInIcon fontSize='large' />,
        link: 'https://www.linkedin.com/in/joelcamposoliva/',
    },
    {
        icon: <GitHubIcon fontSize='large' />,
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
                            alt='Joel Campos'
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
                            >
                                <p>Junior full stack developer (DevOps).</p>
                                <p>+5 years of programming experience (lots of GitHub projects. Some of them in private repositories).</p>
                                <p>I am a passionate developer, very used to work with technologies such as Node.js, .NET, Java, React, among others.</p>
                                <p>I have worked with some well-known frameworks:</p>
                                <ul>
                                    <li>Nest.js for server side Node applications.</li>
                                    <li>Springboot for Java APIs.</li>
                                    <li>Flutter for mobile apps.</li>
                                </ul>
                                <p>I always work with git (in GitHub or Azure DevOps) and follow the SCRUM framework.</p>
                                <p>My most used programming language is TypeScript. I use to create PWA applications using React for the front and Node.js (Nest.js) as the server. Depending on the project the database is MariaDB or MySQL (I know others). I love using ORMs but I know how to write SQL.</p>
                                <p>Dockerizing apps is now my passion 🐋.</p>
                            </p>
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