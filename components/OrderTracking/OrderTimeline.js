import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import styles from "./OrderTrackingComponents.module.css";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundColor: "#179BD7",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "#179BD7",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#179BD7",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundColor: "#179BD7",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <PriorityHighIcon />,
    2: <CheckCircleOutlineIcon />,
    3: <AssignmentLateIcon />,
    4: <LocalShippingIcon />,
    5: <AssignmentTurnedInIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    {
      status: "Pending",
      time: "10 Jul 2021, 10:00 am",
    },
    {
      status: "Confirmed",
      time: "10 Jul 2021, 10:00 am",
    },
    {
      status: "Proccessing",
      time: "10 Jul 2021, 10:00 am",
    },
    {
      status: "On The Way",
      time: "10 Jul 2021, 10:00 am",
    },
    {
      status: "Delivered",
      time: "10 Jul 2021, 10:00 am",
    },
  ];
}

export default function OrderTimeline() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(null);
  const [staps, setStaps] = useState([]);

  useEffect(() => {
    setActiveStep(1);
    const steps = getSteps();
    setStaps(steps);
  }, []);

  return (
    <div className={`${classes.root} ${styles.orderTimelineWrapper}`}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {staps.map((label) => (
          <Step key={label.status}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <h2 className={styles.statusTitle}>{label.status}</h2>
              <h3 className={styles.statusTime}>{label.time}</h3>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
