import { useEffect, useState } from 'react';
import SaveSuccessfully from './UIKit/SaveSuccessfully';
import { useNavigate, useLocation } from "react-router";
import ExpensesService from '../service/expensesService';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const AddExpensePage = () => {


    const navigate = useNavigate();
    const { state } = useLocation();



    const [storeName, setStoreName] = useState("");
    const [totalExpense, setTotalExpense] = useState(0);
    const [description, setDescription] = useState("");

    const [expenseAdded, setExpenseAdded] = useState(false);
    const [dataFound, setDataFound] = useState(false);
    const [error, setError] = useState(false);

    const LoadExpenseAsync = async () => {
        if (state !== null) {
            //get expense from db 
            const expense = await ExpensesService.getExpenseById(state.id);
            setStoreName(expense.data.storeName);
            setTotalExpense(expense.data.totalExpense);
            setDescription(expense.data.description);
        }
    }


    useEffect(() => {
        LoadExpenseAsync();
    }, [])


    const Submit = async (event) => {
        event.preventDefault();

        debugger

        if (totalExpense === 0) { setError(true); return }

        const data = {
            storeName: storeName,
            totalExpense: totalExpense,
            description: description,
            date: Date.now()
        }

        if (state !== null)
            ExpensesService.updateExpense(state.id, data); //update exist expense
        else
            await ExpensesService.addExpenses(data); //new expense

        //restart
        setStoreName("")
        setTotalExpense(0)
        setExpenseAdded(true);
    }
    const CancelButtonClicked = () => {
        if (storeName.trim() !== "" || totalExpense !== 0)
            setDataFound(true);
        else
            navigate("/")
    }



    if (!expenseAdded) {
        return (
            <div className='container'>
                <TextField
                    id="outlined-required"
                    value={storeName}
                    onChange={(event) => setStoreName(event.target.value)}
                    variant="outlined"
                    label="Store"
                    className='space'
                />
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
                    className='space'
                />
                <TextField
                    id="outlined-number"
                    value={description}
                    variant="outlined"
                    label="description"
                    onChange={(event) => setDescription(event.target.value)}
                    InputLabelProps={{ shrink: true }}
                    className='space'
                />
                <br />
                <div id='wrapper btns'>
                    <button className="btn btn-primary" onClick={Submit}>Add</button>
                    <button className="btn btn-danger" onClick={CancelButtonClicked}>cancel</button>
                </div>
                {
                    error && (<div>
                        <h5 className="alert alert-danger"> Fill de Total Expense</h5>
                    </div>)}
                {dataFound && (<div>
                    <Card>
                        <CardContent>
                            <h5>Are You Sure??</h5>
                            <button className="btn btn-primary" onClick={() => { navigate("/") }}>yes</button>
                            <button className="btn btn-danger" onClick={() => { setDataFound(false) }}>no</button>
                        </CardContent>
                    </Card>
                </div>)}
            </div>)
    }

    return (
        <div>
            <SaveSuccessfully Continue={() => setExpenseAdded(false)} />
        </div>
    )


}
export default AddExpensePage;