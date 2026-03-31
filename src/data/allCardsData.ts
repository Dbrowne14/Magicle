//import { ReturnStructure } from "../types/types";
import { useEffect } from "react";

export let dummyData = null;
useEffect(()=> {
    const fetchAllcards = async () => {
        try {
            const response = await fetch('http//:localhost:3000/allCards')
            if (!response.ok) {
                console.log("Error returning fetch")
            }
            const data = await response.json()
            dummyData = data
        } catch (error) {
            console.log(error)
        }
       fetchAllcards() 
    }
}, [])