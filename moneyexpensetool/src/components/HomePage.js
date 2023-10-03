import { useEffect, useState } from "react";
import ExpensesService from "../service/expensesService";
import UserService from "../service/userService";
import { CreateInitialDate, CreateFinalDate } from "../service/daysTrackingService"
import environment from "../environments/environment";
import CardMedia from "./UIKit/Card";
import { useNavigate } from "react-router-dom";


const HomePage = () => {

    const navigate=useNavigate();
    const [buttonDetailsClicked, setButtonDetailsClicked] = useState(false);
    const [user, setUser] = useState();
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [allExpensesByDate, setAllExpensesByDate] = useState(0);


    useEffect(() => {
        LoadDataAsync();
    }, [])


    //fetch data
    const LoadDataAsync = async () => {
        let user = await UserService.getUserById(environment.userId)

        let initDay = user.data.startDate;
        let finDate = user.data.expireDate;
        let actualDate = new Date(Date.now())

        let expireDateFormat = new Date(user.data.expireDate)

        if (actualDate > expireDateFormat) {

            let sumOldExpenses = await ExpensesService.getSumExpensesByDates({ startDate: initDay, expireDate: finDate })

            initDay = CreateInitialDate(user.data.dayOfTracking)
            finDate = CreateFinalDate(initDay);
            // update data
            await UserService.UpdateUser({
                startDate: initDay,
                expireDate: finDate,
                currentBalance: user.data.currentBalance - (sumOldExpenses.data.length === 0 ? 0 : sumOldExpenses.data.sum)
            });
        }

        let sum = await ExpensesService.getSumExpensesByDates({ startDate: initDay, expireDate: finDate })
        let filterExpenses = await ExpensesService.getExpensesByDates({ startDate: initDay, expireDate: finDate })

        setTotalExpenses(sum.data.length === 0 ? 0 : sum.data.sum);
        setAllExpensesByDate(filterExpenses.data);
        setUser(user.data);
    }

    //delete expense from database and ui
    const handleDelete = async(id) => {
            await ExpensesService.deleteExpense(id);
            const newData =allExpensesByDate.filter((item)=>item._id!==id)
            setAllExpensesByDate(newData);
    }

    //update expense from database and ui
    const handleUpdate = (id) => {
        navigate("/AddExpensePage",{state:{id}})
    }

    const ShowExpenses = ({ expenses }) => {
        if (expenses) {
            return expenses.map((item) => {
                return (
                    <CardMedia
                        key={item._id}
                        title={item.storeName}
                        id={item._id}
                        firstDescription={item?.description}
                        secondDescription={item?.totalExpense}
                        DeleteClicked={handleDelete}
                        UpdateClicked={handleUpdate} />
                )
            })
        }
        return (<h3>Expenses not found</h3>)
    }

    return (
        <div>
            <h1>
                HomePage
            </h1>
            {user && (<div className="container">
                <h3>Name : {user.name} </h3>
                <h4>Expenses : {totalExpenses} </h4>
                <h4>Money at the end of the month : {user.currentBalance - totalExpenses} </h4>
            </div>)}
            <div className="container">
                <button id="Btn-Details" className="btn btn-info" onClick={() => { setButtonDetailsClicked(!buttonDetailsClicked) }}>
                    Details
                </button>
                <br />
                <br />
                {buttonDetailsClicked &&
                    (<ShowExpenses expenses={allExpensesByDate} />)
                }
            </div>
            <div>

            </div>
        </div>
    )
}
export default HomePage;