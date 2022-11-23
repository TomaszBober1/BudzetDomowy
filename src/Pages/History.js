import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import { useUserAuth } from "../context/userAuthContext";
import '../Styles.css'

function History() {
  const current = new Date();

  const { user } = useUserAuth();
  const colletionRef = collection(db, user.uid);

  const [dbData, setDbData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;


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
    <div className='history'>
    
      <input className='inputEx' type="text" placeholder="Search ..." onChange={event => { setSearchTerm(event.target.value) }}/>
     
      {loading ? <h1>Loading...</h1> : null}
      {dbData.filter((val) => {
        if(searchTerm == ""){
          return val
        } else if(val.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.tag.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val , key) => (
       <> 
       <div key={key}>
          { Date.parse(val.date) > Date.parse(date) ? 
            <div className={'dbData-f'} key={dbData.id}>
              <h1>Date of payment: {val.date}</h1>
              <h1>Name of transaction: {val.name}</h1>
              {/* <h1>{val.tag}</h1> */}
              <h1>{val.type}</h1>
              <h1>Value: {val.value}</h1>
            </div> : 
            <div className={'dbData-p'} key={dbData.id}>
            <h1>Date of payment: {val.date}</h1>
            <h1>Name of transaction: {val.name}</h1>
            <h1>{val.type}</h1>
            <h1>Value: {val.value}</h1>
          </div> }
        </div>
        </>

        ))}
        
    </div>
  );

}
export default History;
