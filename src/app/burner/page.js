"use client"
import Card from "../components/card/card";
import { useState, useEffect } from "react";

const Page = () => {
    const [user, setuser] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {

            const response = await fetch(`/api/card/`);
            const data = await response.json();
            console.log(data.data);
            setuser(data.data)
        }
        fetchPosts();
    }, [])

    

    return (
        <div className="m-14 flex justify-between">
            {user.map((user)=>{
                if(user.card_type==="burner")
                {
                    return <Card key={user.owner_id} name={user.name} expiry={user.expiry} limit={user.limit} card_type={user.card_type} />
                }
                else{
                    return " "
                }
                
            })}
        </div>
    );
        }


export default Page;



