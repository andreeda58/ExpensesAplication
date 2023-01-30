import { useState } from 'react';
import SaveSuccessfully from './UIKit/SaveSuccessfully';
import UserService from '../service/userService';
import TextField from '@mui/material/TextField';

import { CreateInitialDate, CreateFinalDate } from "../service/daysTrackingService"


const SettingsPage = () => {



    const [name, setName] = useState("andree");
    const [currentBalance, setCurrentBalance] = useState(0);
    const [dayTracking, setDayTracking] = useState(Date.now());
    const [userAdded, setUserAdded] = useState(false);

    const DayChange = (event) => {
        let day = event.target.value;
        if (day < 0) day = 1
        if (day > 31) day = 31
        setDayTracking(day);
    }


    const Submit = async (event) => {
        event.preventDefault();
        debugger

        let initDay = CreateInitialDate(dayTracking);
        let finDate = CreateFinalDate(initDay);
        let data = { name: name, currentBalance: currentBalance, dayOfTracking: dayTracking, startDate: new Date(initDay), expireDate: new Date(finDate) };
        debugger
        await UserService.UpdateUser(data);
        setUserAdded(true);
    }


    if (!userAdded) {
        return (
            <div>
                <form onSubmit={Submit}>
                    <div>
                        <div>Insert Name :</div>
                        <br />
                        <TextField
                            required
                            id="outlined-required"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            label="Name"
                        />
                    </div>
                    <br />
                    <div>
                        <div>Insert Current balance on you bank account :</div>
                        <br />
                        <TextField
                            required
                            id="outlined-number"
                            label="balance"
                            type="number"
                            onChange={(event) => setCurrentBalance(event.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>

                    <div>
                        <div>Insert Current balance on you bank account :</div>
                        <br />
                        <TextField
                            required
                            id="outlined-number"
                            label="day"
                            type="number"
                            onChange={DayChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <br />
                    <button type="submit">
                        Save
                    </button>
                </form>
            </div>
        )
    }

    return (
        <div>
            <SaveSuccessfully Continue={() => { setUserAdded(false) }} />
        </div>
    )

}





export default SettingsPage;