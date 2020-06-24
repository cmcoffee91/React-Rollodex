import React from "react";
import './UserPanel.css';
import {duration, makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    toolbar: theme.mixins.toolbar,
}));


const UserPanel = (props) => {


    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };




    const UserImg = (user) => {
        let picture = user.user.picture;
        return <img src={picture.medium} alt="User Image"/>
    }

    const UserName = (user) => {
        let name = user.user.name;
        let first = name.first;
        let last = name.last;
        return <div>{first} {last}</div>
    }


    const UserGender = (user) => {
        let gender = user.user.gender;
        return <div>Gender: {gender}</div>
    }


    const UserDob = (user) => {
        let dob = user.user.dob;
        let date = dob.date;
        let age = dob.age;
        let dobDiv =
            <div>
               <div>DOB: {date}</div>
                <div>Age: {age}</div>
            </div>

        return dobDiv;
    }


    const UserPhone = (user) => {
        let phone = user.user.phone;
        let cell = user.user.cell;
        let phoneDiv =
            <div>
                <div>Phone: {phone}</div>
                <div>Cell: {cell}</div>
            </div>

        return phoneDiv;
    }


    const UserNat = (user) => {
        let nat = user.user.nat;
        return <div>Nat: {nat}</div>
    }

    const UserEmail = (user) => {
        let email = user.user.email;
        return <div>Email: {email}</div>
    }

    const UserLocation = (user) => {
        let location = user.user.location;
        let street = location.street;
        let number = street.number;
        let name = street.name;
        let city = location.city;
        let state = location.state;
        let country = location.country;
        let postcode = location.postcode;

        let locationDiv = <div>
            <div>Address: {number} {name}</div>
            <div>Postcode: {postcode}</div>
            <div>City: {city} State: {state}</div>
            <div>State: {state}</div>
            <div>Country: {country}</div>
        </div>
        return locationDiv;
    }






    return (
        <div id="container">
            {/*<div className={classes.toolbar} />*/}

            <ExpansionPanel expanded={expanded === props.index} onChange={handleChange( props.index)}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <div id="titleContainer">
                        <UserImg user={props.user}></UserImg>
                        <UserName user={props.user}></UserName>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>

                        <UserGender user={props.user}></UserGender>
                        <UserLocation user={props.user}></UserLocation>
                        <UserEmail user={props.user}></UserEmail>
                        <UserDob user={props.user}></UserDob>
                        <UserPhone user={props.user}></UserPhone>
                        <UserNat user={props.user}></UserNat>



                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </div>
    );
};

export default UserPanel;