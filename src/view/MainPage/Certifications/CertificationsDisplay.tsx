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
            default: return undefined;
        }
    }

    return (
        <Grid
            container
        >
            {
                certifications.map((certification) => {

                    return (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            xl={4}
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
                                        <p>{certification.code && `${certification.code} - `}{certification.id}</p>
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