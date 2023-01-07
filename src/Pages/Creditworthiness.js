import React, {useState} from 'react'
import '../Styles.css'
import Select from 'react-select';

function Creditworthiness() {


  const [creditWorth, setCreditWorth] = useState(0);
  const [worthParams, setWorthParams] = useState({
    income: "",
    permanentLiabilities: "",
    creditCardLimits: "",
    loansInstallments: "",
    peopleInHousehold: "",
    interest: "",
    repeyTime: "",
    age: "",
    children: "",
    maritalStatus: ""
    
  })
  
  const [childrenNumb, setChildrenNumb] = useState();
  const [maritalStat, setMaritalStat] = useState();

  const options = [
    { value: "0", label: 'none' },
    { value: "1", label: 'one' },
    { value: "2", label: 'two' },
    { value: "3", label: 'three' },
    { value: "4", label: 'four' },
    { value: "5", label: 'more' }
  ]

  const status = [
    { value: "0", label: 'married' },
    { value: "1", label: 'single' },
    { value: "2", label: 'divorced' },
    { value: "3", label: 'widow/er' },
  ]

  const exceptThisSymbols = ["e", "E", "+", "-", "."];
  const exceptThisSymbolsWithoutComa = ["e", "E", "+", "-", ".", ","];

  const handleChange = (e) => {
    setWorthParams({ ...worthParams, [e.target.name]: e.target.value })
  }

  const handleChangeChildren = (e) => {
    setChildrenNumb(e);
    setWorthParams({ ...worthParams, ["children"]: e.value });
  }

  const handleChangeStatus = (e) => {
    setMaritalStat(e);
    setWorthParams({ ...worthParams, ["maritalStatus"]: e.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if(worthParams.income === "" || 
       worthParams.permanentLiabilities === "" || 
       worthParams.interest === "" || 
       worthParams.creditCardLimits === "" || 
       worthParams.peopleInHousehold === "" || 
       worthParams.loansInstallments === "" || 
       worthParams.repeyTime === "" || 
       worthParams.age === "" || 
       worthParams.children === "" || 
       worthParams.maritalStatus === ""){
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
      alert("Minimal repay time must be at least 1");
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

    if(worthParams.children === ""){
      alert("Number of children is not set!")
    }
  
    setCreditWorth(0);
    
    let creditW = (worthParams.income - worthParams.permanentLiabilities - worthParams.loansInstallments - worthParams.creditCardLimits * 0.85 );
    let accumulator = 0;
    for(let i = 1; i <= worthParams.repeyTime; ++i) {
      accumulator += (1 + worthParams.interest/1200) ** (-i);
      }



    let x = creditW * accumulator * 1.06;
  
    if(worthParams.age > 65 && worthParams.age < 75){
      
    }else{ 
      if(worthParams.repeyTime > (65 - worthParams.age) * 12){
        x = x *( (65-worthParams.age)*12  /worthParams.repeyTime) + x * 0.8 *  ( (worthParams.repeyTime - (65-worthParams.age)*12) /worthParams.repeyTime);
        
    }}

    if(worthParams.maritalStatus === '1' ){
      x = x * 0.9;
    }else{
      if(worthParams.maritalStatus === '2' ){
        x = x * 0.85;
      }else{
        if(worthParams.maritalStatus === '3' ){
          x = x * 0.95;
        }
      }
    }
   
    if(worthParams.children === '3'){
        x = x * 0.96;
    } else {
      if(worthParams.children === '4' || worthParams.children === '0'){
        x = x * 0.94;
    } else{
      if(worthParams.children === '5'){
        x = x * 0.9;
    } 
    }}

    x = x * ((100 -((worthParams.peopleInHousehold)*4))/100);

    x = x.toFixed(2);
   
    if(x >= 100){
        setCreditWorth(x);
    } else {
       setCreditWorth('-');
    }
   

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
            <input className='inputEx' type="number" min={2} max={15} name="interest" value={worthParams.interest} onChange={handleChange} onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}/>

          <label>repayment time (months)</label>
            <input className='inputEx' type="number" name="repeyTime" value={worthParams.repeyTime} onChange={handleChange} onKeyDown={e => exceptThisSymbolsWithoutComa.includes(e.key) && e.preventDefault()}/>

          <label>credit card limits</label>
            <input className='inputEx' type="number" name="creditCardLimits" value={worthParams.creditCardLimits} onChange={handleChange} onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}/>
         

          <label>marital status</label>
            <Select className='inputEx' name="maritalStatus" value={maritalStat} onChange={(choice) => handleChangeStatus(choice)} options={status} />

          <label>number of children</label>
            <Select className='inputEx' name="children" value={childrenNumb} onChange={(choice) => handleChangeChildren(choice)} options={options} />


          <label>loansInstallments</label>
            <input className='inputEx' type="number" name="loansInstallments" value={worthParams.loansInstallments} onChange={handleChange} onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}/>

          <label>people in household</label>
            <input className='inputEx' type="number" min={1} max={10} name="peopleInHousehold" value={worthParams.peopleInHousehold} onChange={handleChange} onKeyDown={e => exceptThisSymbolsWithoutComa.includes(e.key) && e.preventDefault()}/>

          <label>age</label>
            <input className='inputEx' type="number" min={18} max={100} name="age" value={worthParams.age} onChange={handleChange} onKeyDown={e => exceptThisSymbolsWithoutComa.includes(e.key) && e.preventDefault()}/>


          <input className='inputEx' type="submit" value="CALCULATE" />

          {creditWorth !==0 && <label className='loanlabel'>Creditworthiness: {creditWorth}</label>}
        </form>
        
    </div>
    </div>
  )
}

export default Creditworthiness;
