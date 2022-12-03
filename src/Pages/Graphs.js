  import React, { useState, useEffect, Suspense } from 'react';
  import { collection, query, onSnapshot } from "firebase/firestore";
  import { db } from "../firebase-config";
  import { useUserAuth } from "../context/userAuthContext";
  import '../Styles.css'
  import Chart from '../components/Chart';


  function Graphs() {

    const current = new Date();
    const date = `${current.getFullYear()}`;
    const { user } = useUserAuth();
    const colletionRef = collection(db, `${user.uid}`);
    const [year, setYear] = useState(date)
    const [dbData, setDbData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [januaryInc, setJanuaryInc] = useState(0);
    const [febuaryInc, setFebuaryInc] = useState(0);
    const [marchInc, setMarchInc] = useState(0);
    const [aprilInc, setAprilInc] = useState(0);
    const [mayInc, setMayInc] = useState(0);
    const [juneInc, setJuneInc] = useState(0);
    const [julyInc, setJulyInc] = useState(0);
    const [augustInc, setAugustInc] = useState(0);
    const [septemberInc, setSeptemberInc] = useState(0);
    const [octoberInc, setOctoberInc] = useState(0);
    const [novemberInc, setNovemberInc] = useState(0);
    const [decemberInc, setDecemberInc] = useState(0);

    const [januaryOut, setJanuaryOut] = useState(0);
    const [febuaryOut, setFebuaryOut] = useState(0);
    const [marchOut, setMarchOut] = useState(0);
    const [aprilOut, setAprilOut] = useState(0);
    const [mayOut, setMayOut] = useState(0);
    const [juneOut, setJuneOut] = useState(0);
    const [julyOut, setJulyOut] = useState(0);
    const [augustOut, setAugustOut] = useState(0);
    const [septemberOut, setSeptemberOut] = useState(0);
    const [octoberOut, setOctoberOut] = useState(0);
    const [novemberOut, setNovemberOut] = useState(0);
    const [decemberOut, setDecemberOut] = useState(0);

    const dataIn = [januaryInc, febuaryInc, marchInc, aprilInc, mayInc, juneInc, julyInc, augustInc, septemberInc, octoberInc, novemberInc, decemberInc];
    const dataOu = [januaryOut, febuaryOut, marchOut, aprilOut, mayOut, juneOut, julyOut, augustOut, septemberOut, octoberOut, novemberOut, decemberOut];

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const reset = () => {
      setJanuaryInc(0);
      setFebuaryInc(0);
      setMarchInc(0);
      setAprilInc(0);
      setMayInc(0);
      setJuneInc(0);
      setJulyInc(0);
      setAugustInc(0);
      setSeptemberInc(0);
      setOctoberInc(0);
      
      setNovemberInc(0);
      setDecemberInc(0);

      setJanuaryOut(0);
      setFebuaryOut(0);
      setMarchOut(0);
      setAprilOut(0);
      setMayOut(0);
      setJuneOut(0);
      setJulyOut(0);
      setAugustOut(0);
      setSeptemberOut(0);
      setOctoberOut(0);
      setNovemberOut(0);
      setDecemberOut(0);
      };

      
     
      const dataSorter = (data) =>{
        reset();
        console.log(dbData);

        
        data.map((val) => {
        const [year_, month_, day_] = val.date.split('-');
        console.log(val.type, val.value, year_);
        if(val.type === "Income" && year_ === year){
          if(month_ === '01'){
            console.log(val.value);

            setJanuaryInc(januaryInc => parseFloat(januaryInc) + parseFloat(val.value));
          }
          if(month_ === '02'){
            console.log(val.value);

            setFebuaryInc(febuaryInc => parseFloat(febuaryInc) + parseFloat(val.value));
          }
          if(month_ === '03'){
            console.log(val.value);

             setMarchInc(marchInc => parseFloat(marchInc) + parseFloat(val.value));
          }
          if(month_ === '04'){
            console.log(val.value);

            setAprilInc(aprilInc => parseFloat(aprilInc) + parseFloat(val.value));
          }
          if(month_ === '05'){
            console.log(val.value);

             setMayInc(mayInc => parseFloat(mayInc) + parseFloat(val.value));
          }
          if(month_ === '06'){
            console.log(val.value);

            setJuneInc(juneInc => parseFloat(juneInc) + parseFloat(val.value));
          }
          if(month_ === '07'){
            console.log(val.value);

            setJulyInc(julyInc => parseFloat(julyInc) + parseFloat(val.value));
          }
          if(month_ === '08'){
            console.log(val.value);

            setAugustInc(augustInc => parseFloat(augustInc) + parseFloat(val.value));
          }
          if(month_ === '09'){
            console.log(val.value);

            setSeptemberInc(septemberInc => parseFloat(septemberInc) + parseFloat(val.value));
          }
          if(month_ === '10'){
            console.log(val.value);

            setOctoberInc(octoberInc => parseFloat(octoberInc) + parseFloat(val.value)); console.log('10');
          }            
          if(month_ === '11'){
            console.log(val.value);

            setNovemberInc(novemberInc => parseFloat(novemberInc) + parseFloat(val.value));
          }

          if(month_ === '12'){
            setDecemberInc(decemberInc => parseFloat(decemberInc) + parseFloat(val.value));
          }
          
        } else {
          console.log(val.type, val.value, year_, month_);
          if(val.type === "Outcome" && year_ === year){

            if(month_ === '01'){
              console.log(val.value);

              setJanuaryOut(januaryOut => parseFloat(januaryOut) + parseFloat(val.value));
            }
            if(month_ === '02'){
              console.log(val.value);

              setFebuaryOut(febuaryOut => parseFloat(febuaryOut) + parseFloat(val.value));
            }
            if(month_ === '03'){
              console.log(val.value);

               setMarchOut(marchOut => parseFloat(marchOut) + parseFloat(val.value));
            }
            if(month_ === '04'){
              console.log(val.value);

              setAprilOut(aprilOut => parseFloat(aprilOut) + parseFloat(val.value));
            }
            if(month_ === '05'){
              console.log(val.value);

               setMayOut(mayOut => parseFloat(mayOut) + parseFloat(val.value));
            }
            if(month_ === '06'){
              console.log(val.value);

              setJuneOut(juneOut => parseFloat(juneOut) + parseFloat(val.value));
            }
            if(month_ === '07'){
              console.log(val.value);

              setJulyOut(julyOut => parseFloat(julyOut) + parseFloat(val.value)); console.log(julyOut);
            }
            if(month_ === '08'){
              console.log(val.value);

              setAugustOut(augustOut => parseFloat(augustOut) + parseFloat(val.value));
            }
            if(month_ === '09'){
              console.log(val.value);

              setSeptemberOut(septemberOut => parseFloat(septemberOut) + parseFloat(val.value));
            }
            if(month_ === '10'){
              console.log(val.value);

              setOctoberOut(octoberOut => parseFloat(octoberOut) + parseFloat(val.value)); console.log('10out');
            }            
            if(month_ === '11'){
              console.log(val.value);

              setNovemberOut(novemberOut => parseFloat(novemberOut) + parseFloat(val.value));
            }

            if(month_ === '12'){
              setDecemberOut(decemberOut => parseFloat(decemberOut) + parseFloat(val.value));
            }
        }}
      })
      

      };
      
    
  

      useEffect(() => {
        const q = query(
          colletionRef,
    
        );
    
        setLoading(true);
    
        const unsub = onSnapshot(colletionRef, (querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push(doc.data());
          });
          setDbData(items);
          setLoading(false);
          
        });
        return () => {
          unsub();
        };
    
    
      }, []);
  

    return (
    <div>
      {loading ? <h1>Loading...</h1> : <><input className='graph_input'
        placeholder='Enter year...'
        type='number'
        min={1987}
        max={2099}
        onChange={(evt) => {setYear(evt.target.value)}}
      />
     <button className='graph_button' onClick={() => {dataSorter(dbData)}}>Generate graph</button>
      
      <Chart labels={labels} data1={dataIn} data2={dataOu}/>
      </>}

    </div>
 
  )
}

export default Graphs;
