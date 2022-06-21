import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { DateObjectUnits, DateTime } from "luxon";
import { useState } from "react";

export type WorkExperience = {
    name: string;
    position: string;
    description: string;
    imageSrc: string;
    from: DateObjectUnits;
    to?: DateObjectUnits;
}

type Props = {
    experience: WorkExperience[];
}

export default function WorkExperienceDisplay(props: Props) {

    const experience = props.experience.sort((a, b) => DateTime.fromObject(a.from) < DateTime.fromObject(b.from) ? 1 : -1);

    const [expanded, setExpanded] = useState<number>(0);

    return (
        <div>
            {
                experience.map((element, i) => {

                    return (
                        <Accordion
                            expanded={expanded === i}
                            onChange={() => {
                                if (expanded === i) setExpanded(-1);
                                else setExpanded(i);
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '99%',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            gap: '0.75em',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <img
                                            src={element.imageSrc}
                                            alt='Logo'
                                            style={{
                                                width: '2.75em',
                                                height: '2.75em',
                                            }}
                                        />
                                        <p>{element.name}</p>
                                    </div>
                                    <p>{element.from.year} - {element.to ? element.to.year : 'now'}</p>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p
                                    style={{
                                        marginLeft: '2em',
                                        marginRight: '2em',
                                    }}
                                >{element.description}</p>
                            </AccordionDetails>
                        </Accordion>
                    );
                })
            }
        </div>
    );
};