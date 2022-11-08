import { useState } from "react"
import DatePicker from "react-datepicker"
import "./AddExpense.css";
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';


import "react-datepicker/dist/react-datepicker.css"

export default function AddExpense(props){

    const [toggleAddForm, setToggleAddForm] = useState(false)

    return (
        <Formik
            initialValues={{title:'', amount:'',expenseDate:''}}
            validationSchema={Yup.object({
                title: Yup.string()
                    .max(200,'Must be less than 200 characters')
                    .required('Required'),
                amount: Yup.number()
                    .required('Required'),
                expenseDate:Yup.date()
                    .required('Required')
            })}
            onSubmit={(values,actions) => {
                const newItemExpense = {
                    id:Date.now(),
                    date:new Date(values.expenseDate),
                    title:values.title,
                    amount:values.amount
                }

                props.handleAddExpense(newItemExpense)

                actions.resetForm({
                    values:{
                        title:'',
                        amount:'',
                        expenseDate:''
                    }
                })
            }}
        >
            {formik => (
                <div className="addBar">
                    <button 
                        className={`newExpenseBtn ${toggleAddForm ? "hidden" : ""}`}
                        onClick={()=>setToggleAddForm(!toggleAddForm)}    
                    >Add New Expense</button>
                    <form onSubmit={formik.handleSubmit} className={`addForm ${toggleAddForm ? "" : "hidden"}`}>
                    <div className="addFields">
                        <div className="expenseField">
                            <label htmlFor="title" className="fieldTitle">Title</label>
                            <input 
                                id="title"
                                type="text"
                                {...formik.getFieldProps('title')}
                            />
                            {formik.touched.title && formik.errors.title ? (
                                <div>{formik.errors.title}</div>
                            ):null}
                        </div>
                        <div className="expenseField">
                            <label htmlFor="amount" className="fieldTitle">Amount</label>
                            <input 
                                id="amount"
                                type="number"
                                {...formik.getFieldProps('amount')}
                            />
                            {formik.touched.amount && formik.errors.amount ? (
                                <div>{formik.errors.amount}</div>
                            ):null}
                        </div>
                        <div className="expenseField">
                            <label htmlFor="expenseDate" className="fieldTitle">Date</label>
                            <input 
                                id="expenseDate"
                                type="date"
                                {...formik.getFieldProps('expenseDate')}
                            />
                            {formik.touched.expenseDate && formik.errors.expenseDate ? (
                                <div>{formik.errors.expenseDate}</div>
                            ):null}
                        </div>
                    </div>
                    <div className="addOrders">
                        <button onClick={(e)=>{
                            e.preventDefault()
                            setToggleAddForm(!toggleAddForm)
                            formik.resetForm({
                                values:{
                                    title:'',
                                    amount:'',
                                    expenseDate:''
                                }
                            })
                            // formik.setFieldValue("title",'')
                            // formik.setFieldValue("amount",'')
                            // formik.setFieldValue("expenseDate",'')
                        }}>Cancel</button>
                        <button type="submit" >Add Expense</button>
                    </div>
                </form>
                </div>
            )}
        </Formik>
    )
}