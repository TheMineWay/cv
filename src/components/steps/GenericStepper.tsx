import { Icon, Step, StepLabel, Stepper } from '@mui/material';
import { DateObjectUnits, DateTime } from 'luxon';

export type GenericStep = {
    imageSrc: string;
    title: string;
    subtitle: string;
    from: DateObjectUnits;
    to?: DateObjectUnits;
}

type Props = {
    steps: GenericStep[];
}

export default function GenericStepper(props: Props) {

    const divided: GenericStep[][] = [];
    for (let i = 0; i < props.steps.length; i++) {
        if (i % 3 == 0 || i == 0) {
            divided.push([]);
        }
        divided[Math.floor(i / 3)].push(props.steps[i]);
    }

    return (
        <div
            style={{
                display: 'grid',
                rowGap: '2em',
            }}
        >
            {
                divided.map((dividedStep) => (
                    <Stepper
                        alternativeLabel
                    >
                        {
                            dividedStep.map((step, i) => (
                                <Step
                                    key={`step_${i}_${DateTime.now().set(step.from).toMillis()}`}
                                    active={(!step.to || DateTime.fromObject(step.to) <= DateTime.now()) && DateTime.fromObject(step.from) <= DateTime.now()}
                                >
                                    <StepLabel
                                        icon={(
                                            <img
                                                src={step.imageSrc}
                                                style={{
                                                    height: '2em',
                                                }}
                                            />
                                        )}
                                    >
                                        <b>{step.title}</b>
                                        <p>{step.subtitle}</p>
                                        <small>{step.from.year}{step.to && (<> - {step.to.year}</>)}</small>
                                    </StepLabel>
                                </Step>
                            ))
                        }
                    </Stepper>
                ))
            }
        </div>
    );
}