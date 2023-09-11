"use client"
import React, { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import db from "@/app/page"
const RetrieveData = () => {

    const [info, setInfo] = useState([]);


 
    // Fetch the required data using the get() method
    const Fetchdata = () => {
        db.collection("data").get().then((querySnapshot) => {
 
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr, data]);
 
            });
        })
    }

    Fetchdata()
  return (
    <div>
           <div>
      <h2>Firebase Data</h2>

      {
                info.map((data) => (
                    <Frame course={data.CourseEnrolled}
                        name={data.Nane}
                        age={data.Age} />
                ))
            }
    </div>
    </div>
  )
}

export default RetrieveData