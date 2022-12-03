import React, {useState} from 'react'
import '../Styles.css'

function Creditworthiness() {


  const [creditWorth, setCreditWorth] = useState(0);
  const [worthParams, setWorthParams] = useState({
    income: "",
    permanentLiabilities: "",
    creditCardLimits: "",
    loansInstallments: "",
    peopleInHousehold: "",
    interest: "",
    repeyTime: ""
  })

  const exceptThisSymbols = ["e", "E", "+", "-", "."];
  const exceptThisSymbolsWithoutComa = ["e", "E", "+", "-", ".", ","];

  const handleChange = (e) => {
    const value = e.target.value;
    setWorthParams({ ...worthParams, [e.target.name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(worthParams.income === "" || worthParams.permanentLiabilities === "" || worthParams.interest === "" || worthParams.creditCardLimits === "" || worthParams.peopleInHousehold === "" || worthParams.loansInstallments === "" || worthParams.repeyTime === ""){
      alert("Every input must be filled!");
      return;
    }
  
    if(worthParams.income <= 0 || worthParams.permanentLiabilities < 0 || worthParams.creditCardLimits < 0 || worthParams.loansInstallments < 0 || worthParams.peopleInHousehold < 0  || worthParams.interest < 0 || worthParams.repeyTime < 0){
      alert("Values can't be negative or 0!");
      return;
    }

    if(worthParams.income < 1000){
      alert("Minimal income must be greater than 1000");
      return;
    }

    if(worthParams.repeyTime < 1){
      alert("Minimal repey time must be at least 1");
      return;
    }

    if(worthParams.peopleInHousehold < 1){
      alert("Minimal number of people in household must be at least 1");
      return;
    }

    if(worthParams.interest < 2.0){
      alert("Minimal interest must be greater than 2.0");
      return;
    }
  
    setCreditWorth(0);
        
    let accumulator = 0;
    for(let i = 1; i <= worthParams.repeyTime; ++i) {
      accumulator += (1 + worthParams.interest/1200) ** (-i);
  }

    let x = worthParams.income/accumulator;
    let y = (x * worthParams.repeyTime) + (worthParams.income * worthParams.permanentLiabilities/100);
    
    x = x.toFixed(3);
    y = y.toFixed(3);

    setCreditWorth(x);
     //setWorthParams({income: "", permanentLiabilities: "", interest: "", repeyTime: ""})
  };

  return (
    <div >
       <div className='newexpense'>
        <form className='newexpense_form' onSubmit={handleSubmit} >

          <label>household income</label>
            <input className='inputEx' type="number" name="income" value={worthParams.income} onChange={handleChange} onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}/>
          
          <label>permanent liabilities</label>
            <input className='inputEx' type="number" name="permanentLiabilities" value={worthParams.permanentLiabilities} onChange={handleChange} onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}/>
          
          <label>interest</label>
            <input className='inputEx' type="number" name="interest" value={worthParams.interest} onChange={handleChange} onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}/>

          <label>repayment time (months)</label>
            <input className='inputEx' type="number" name="repeyTime" value={worthParams.repeyTime} onChange={handleChange} onKeyDown={e => exceptThisSymbolsWithoutComa.includes(e.key) && e.preventDefault()}/>

          <label>credit card limits</label>
            <input className='inputEx' type="number" name="creditCardLimits" value={worthParams.creditCardLimits} onChange={handleChange} onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}/>

          <label>loansInstallments</label>
            <input className='inputEx' type="number" name="loansInstallments" value={worthParams.loansInstallments} onChange={handleChange} onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}/>

          <label>people in household</label>
            <input className='inputEx' type="number" name="peopleInHousehold" value={worthParams.peopleInHousehold} onChange={handleChange} onKeyDown={e => exceptThisSymbolsWithoutComa.includes(e.key) && e.preventDefault()}/>

          <input className='inputEx' type="submit" value="CALCULATE" />

          {creditWorth !==0 && <label className='loanlabel'>Creditworthiness: {creditWorth}</label>}
        </form>
        
    </div>
    </div>
  )
}

export default Creditworthiness;
