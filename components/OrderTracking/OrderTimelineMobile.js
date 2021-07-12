import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from './OrderTrackingComponents.module.css';
import { withStyles } from '@material-ui/core';
import StepConnector from '@material-ui/core/StepConnector';

const ColorlibConnector = withStyles({
    active: {
        '& $line': {
            backgroundColor: '#179BD7',
        },
    },
    completed: {
        '& $line': {
            backgroundColor: '#179BD7',
        },
    },
})(StepConnector);

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));


function getSteps() {
    return [
        {
            status: 'Pending',
            time: '10 Jul 2021, 10:00 am'
        },
        {
            status: 'Confirmed',
            time: '10 Jul 2021, 10:00 am'
        },
        {
            status: 'Proccessing',
            time: '10 Jul 2021, 10:00 am'
        },
        {
            status: 'On The Way',
            time: '10 Jul 2021, 10:00 am'
        },
        {
            status: 'Delivered',
            time: '10 Jul 2021, 10:00 am'
        },
    ];
}


export default function OrderTimelineMobile() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(null);
    const [staps, setStaps] = useState([]);


    useEffect(() => {
        setActiveStep(1)
        const steps = getSteps();
        setStaps(steps);
    }, [])

    return (
        <div className={`${ classes.root } ${ styles.orderTimelineWrapper }`}>
            <Stepper activeStep={activeStep} orientation="vertical" connector={<ColorlibConnector />}>
                {staps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>
                            <h2 className={styles.statusTitle}>{label.status}</h2>
                            <h3 className={styles.statusTime}>{label.time}</h3>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}