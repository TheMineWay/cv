import { Grid, Tooltip } from "@mui/material";

export type ProgrammingLanguage = {
    name: string;
    imageSrc: string;
}

type Props = {
    programmingLanguages: ProgrammingLanguage[];
}

export default function ProgrammingLanguageDisplay({ programmingLanguages }: Props) {

    return (
        <Grid
            container
            justifyContent='center'
            gap={[2, 2]}
        >
            {
                programmingLanguages.map((pl) => {

                    return (
                        <Grid
                            item
                            xs={12 / 2}
                            sm={5.75 / 2}
                            md={2.75 / 2}
                            spacing={4}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Tooltip
                                    title={pl.name}
                                >
                                    <img
                                        src={pl.imageSrc}
                                        style={{
                                            height: '7em',
                                            maxWidth: '100%',
                                            objectFit: 'contain',
                                        }}
                                        alt='Programming language logo'
                                    />
                                </Tooltip>
                            </div>
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}