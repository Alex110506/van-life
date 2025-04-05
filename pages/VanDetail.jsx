import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
    const params=useParams();
    const id=params.id;

    const [van,setVan]=React.useState(null);

    React.useEffect(()=>{
        fetch(`/api/vans/${id}`)
            .then(res=>res.json())
            .then(data=>{
                setVan(data.vans)
            })
            .catch(err=>console.error(err));
    },[id])

    console.log(van)

    return(
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} className="van-img-detail"></img>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price">${van.price}<span>/day</span></p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}