import { useState } from 'react';
import SaveSuccessfully from './UIKit/SaveSuccessfully';
import { useNavigate } from "react-router";
import ExpensesService from '../service/expensesService';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const AddExpensePage = () => {


    const navigate = useNavigate();
    const [storeName, setStoreName] = useState("Stam");
    const [totalExpense, setTotalExpense] = useState(0);

    const [expenseAdded, setExpenseAdded] = useState(false);
    const [dataFound, setDataFound] = useState(false);
    const [error,setError]=useState(false);

    const continueClicked = (event) => { setExpenseAdded(event) }
    
    const Submit = async (event) => {
        event.preventDefault();

        if(totalExpense == 0){setError(true);return}

        let data = {
            storeName: storeName,
            totalExpense: totalExpense,
            date: Date.now()
        }
        await ExpensesService.addExpenses(data);
        setStoreName("")
        setTotalExpense(0)
        setExpenseAdded(true);
    }
    const CancelButtonClicked = () => {
        
        if (storeName.trim() != "" || totalExpense != 0) 
            setDataFound(true);
        else 
            navigate("/")
    }


    if (!expenseAdded) {
        return (
            <div>
                <div>
                    Store Name:
                </div>
                <br/>
                <TextField
                    id="outlined-required"
                    value={storeName}
                    onChange={(event) => setStoreName(event.target.value)}
                    variant="outlined"
                    label="Store"
                />
                <div>
                    Total Expense:
                </div>
                <br/>

                <TextField
                    id="outlined-number"
                    value={totalExpense}
                    variant="outlined"
                    type="number"
                    label="Expense"
                    onChange={(event) => setTotalExpense(event.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                 <br/>
                 <br/>
                <div>
                    <button onClick={Submit}>Add</button>
                    <button onClick={CancelButtonClicked}>cancel</button>
                </div>
                {
                    error && (<div>
                        <h5 className="alert alert-danger"> Fill de Total Expense</h5>
                        </div>)}

                {dataFound && (<div>
                    <Card>
                        <CardContent>
                            <h5>Are You Sure??</h5>
                            <button onClick={()=>{navigate("/")}}>yes</button>
                            <button onClick={() => {setDataFound(false) }}>no</button>
                        </CardContent>
                    </Card>

                </div>)}
            </div>
        )
    }

    return (
        <div>
            <SaveSuccessfully Continue={continueClicked} />
        </div>
    )

}


export default AddExpensePage;