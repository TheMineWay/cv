import { Button, Divider, Grid, Paper } from "@mui/material";
import { Certification, CertificationProvider } from "./Certifications";

type Props = {
    certifications: Certification[];
}

export default function CertificationsDisplay(props: Props) {

    const certifications = props.certifications;

    const providerIcon = (provider?: CertificationProvider): string | undefined => {
        switch (provider) {
            case CertificationProvider.microsoft: return require('../../../resources/CertificationProviders/microsoft.png');
            case CertificationProvider.fundae: return require('../../../resources/CertificationProviders/fundae.png');
            default: return undefined;
        }
    }

    return (
        <Grid
            container
            style={{
                gap: '1em',
            }}
            justifyContent='center'
        >
            {
                certifications.map((certification) => {

                    return (
                        <Grid
                            item
                            xs={11.70}
                            md={5.70}
                            xl={3.80}
                        >
                            <Paper
                                style={{
                                    width: '100%',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1em',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                        }}
                                    >
                                        <img
                                            width='70em'
                                            style={{
                                                maxWidth: '100%',
                                                marginLeft: '1em',
                                            }}
                                            alt='Provider icon'
                                            src={providerIcon(certification.provider)}
                                        />
                                    </div>
                                    <div>
                                        <h3>{certification.name}</h3>
                                        <p>
                                            {certification.id && <><b>ID: </b>{certification.id}</>}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <Divider/>
                                    <Button
                                        disabled={!certification.url}
                                        onClick={() => {
                                            window.open(certification.url, '_blank');
                                        }}
                                        type='button'
                                        style={{
                                            width: '100%'
                                        }}
                                    >View certificate</Button>
                                </div>
                            </Paper>
                        </Grid>
                    );
                })
            }
        </Grid>
    );
}