import React, { useState } from 'react';
import Switch from "react-switch";
import { useUserAuth} from "../context/userAuthContext";
import { db } from "../firebase-config";
import { addDoc, collection } from 'firebase/firestore';
import "../Styles.css";

function Newexpense() {
   const [switchCheck, setSwitchCheck] = useState("Income");
   const [switchCheckbool, setSwitchCheckbool] = useState(true);
   const { user } = useUserAuth();
   const firestoreConn = collection(db, user.uid);

   const exceptThisSymbols = ["e", "E", "+", "-", "."];

  const [expense, setExpense] = useState({
    name: "",
    date: "",
    type: "Income",
    value: "",
    tag: ""
  });

   const checkSwitch = (e) => {
    if(switchCheck === "Income"){
      setSwitchCheck("Outcome");
      
    } else {
      setSwitchCheck("Income");
    }
    setSwitchCheckbool(!switchCheckbool);
    setType();
    console.log(switchCheck, switchCheckbool);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setExpense({ ...expense, [e.target.name]: value })
};

const handleSubmit = (e) => {
  e.preventDefault();

  if(expense.name === "" || expense.date === "" || expense.type === "" || expense.value === "" || expense.tag === ""){
    alert("Every input must be filled!");
    return;
  }

  if(expense.value <= 0){
    alert("Value can't be negative!");
    return;
  }

  //TODO wysyłanie do bazy
  addDoc(collection(db, user.uid), {
    name: expense.name,
    date: expense.date,
    type: expense.type,
    value: expense.value,
    tag: expense.tag,
  } );

  console.log(expense);
  setExpense({ name: "", date: "", value: "", tag: "" });
};

const setType = e => {
  setExpense(existingValues => ({
    ...existingValues,
    type: switchCheck
  }))
};

  return (
      <div className='newexpense'>
        <form className='newexpense_form' onSubmit={handleSubmit} >
          <label className='label'>Transaction name</label>
          <input className='inputEx' type="text" name="name" value={expense.name} onChange={handleChange}/>
          
          <label className='label'>Date</label>
          <input className='inputEx' type="date" name="date" value={expense.date} onChange={handleChange}/>
          
          <label className='label'>Value</label>
          <input className='inputEx' type="number" name="value" value={expense.value} onChange={handleChange} onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}/>
          
          <label className='label'>Tag</label>
          <input className='inputEx' type="text" name="tag" value={expense.tag} onChange={handleChange}/>          
          
          <label className='label'>Income/Outcome</label>
          <Switch className='switch' checked={switchCheckbool} onChange={ checkSwitch } name="type"/>
          <></>
          <input className='inputEx' type="submit" value="Submit" />
        </form>
        
    </div>
  )
}

export default Newexpense;
