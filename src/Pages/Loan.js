import React, { useState } from 'react';
//import Switch from "react-switch";
import '../Styles.css'

function Loan() {
  //TODO obliczanie kosztu całk. kredytu gotówkowego

  const [installment, setInstallment] = useState(0);
  const [total, setTotal] = useState(0);
  const [loanParams, setLoanParams] = useState({
    loanAmount: "",
    comission: "",
    interest: "",
    repeyTime: ""
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setLoanParams({ ...loanParams, [e.target.name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(loanParams.loanAmount === "" || loanParams.comission === "" || loanParams.interest === "" || loanParams.repeyTime === ""){
      alert("Every input must be filled!");
      return;
    }
  
    if(loanParams.loanAmount <= 0 || loanParams.comission < 0 || loanParams.interest <= 0 || loanParams.repeyTime < 1){
      alert("Values can't be negative or 0!");
      return;
    }

    if(loanParams.loanAmount < 100){
      alert("Minimal loan value is 100");
      return;
    }

    if(loanParams.comission >= 25){
      alert("Maximum comission is 25%");
      return;
    }

    if(loanParams.interest >= 25){
      alert("Maximum interest is 25%");
      return;
    }
  
    setInstallment(0);
    setTotal(0);
    
    let accumulator = 0;
    for(let i = 1; i <= loanParams.repeyTime; ++i) {
      accumulator += (1 + loanParams.interest/1200) ** (-i);
  }

    let x = loanParams.loanAmount/accumulator;
    let y = (x * loanParams.repeyTime) + (loanParams.loanAmount * loanParams.comission/100);
    
    x = x + (loanParams.loanAmount * loanParams.comission)/ (100 * loanParams.repeyTime);
    
    x = x.toFixed(3);
    y = y.toFixed(3);

    setInstallment(x);
    setTotal(y);
   
  };

  return (
    <div >
       <div className='newexpense'>
        <form className='newexpense_form' onSubmit={handleSubmit} >
          <label>loan amount</label>
          <input className='inputEx' type="number" placeholder='loan amount' name="loanAmount" value={loanParams.loanAmount} onChange={handleChange}/>
          
          <label>comission</label>
          <input className='inputEx' type="number" placeholder='comission 0-25%' name="comission" value={loanParams.comission} onChange={handleChange}/>
          
          <label>interest</label>
          <input className='inputEx' type="number" placeholder='interest 0-25%' name="interest" value={loanParams.interest} onChange={handleChange}/>

          <label className='label_repeyment'>repayment time (months)</label>
          <input className='inputEx' type="number" placeholder='repeyment in months' name="repeyTime" value={loanParams.repeyTime} onChange={handleChange}/>
          <input className='inputEx' type="submit" value="CALCULATE" />
          {installment !==0 && <label className='loanlabel'>Instalment: {installment}</label>}
          {total !==0 && <label className='loanlabel'>Total cost: {total}</label>}
        </form>
        
    </div>
    </div>
  )
}

export default Loan;
