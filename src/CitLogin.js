import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { useState } from "react";
import { Button } from "@material-ui/core";
import Navbar from "./Navbar";
import CitLoginForm from "./cit-login-form";
function CitLogin(){

    const [open,setOpen] = useState(true)
    const handleClickToOpen = () => {
        setOpen(true);
    };
    const handleToClose = () => {
        setOpen(false);
    };

    return(
        <div>
                <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>{"Important"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    The Commission is empowered to inquire or cause inquiries to be conducted into offences alleged to have been committed under the Prevention of Corruption Act, 1988 by certain categories of public servants of the Central Government, corporations established by or under any Central Act, Government Companies, societies and local authorities owned or controlled by Central Government. Categories of such public servants are as below:
Members of All-India Services serving in connection with the affairs of the Union and Group A officers of the Central Government
Officers of the rank of Scale V and above in the Public Sector Banks
Chief Executives and Executives on the Board and other officers of E-8 and above in Schedule 'A' and 'B' Public Sector Undertakings
Chief Executives and Executives on the Board and other officers of E-7 and above in Schedule 'C' and 'D' Public Sector Undertakings
Officers in Grade D and above in Reserve Bank of India, NABARD and SIDBI
Managers and above in General Insurance Companies
Senior Divisional Managers and above in Life Insurance Corporations
Officers drawing salary of Rs.8700/- p.m. and above on Central Government D.A. pattern, as on the date of the notification (dt.12th September 2007) and as may be revised from time to time in Societies and other Local Authorities
Note:
Please do not lodge complaints in respect of matters against officers of the Central Government and its organizations other than the categories/levels mentioned above.
Matters pertaining to State Governments are not within the powers of the Central Vigilance Commission. Kindly lodge complaints relating to State Governments and its officials to the designated authorities concerned.
                        
                    </DialogContentText>
                    

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleToClose}>Confirm and Close</Button>
                    {/* <Button onClick={handleToClose}
                        color="primary" autoFocus>
                        Close
                    </Button> */}
                </DialogActions>
            </Dialog>
        <Navbar />
        <CitLoginForm />
        </div>
    )
    }

export default CitLogin;