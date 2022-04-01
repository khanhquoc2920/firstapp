import React from 'react'
import {data} from '../data'
import '../css/demo.css'
export default function demo() {
  return (
    <>  
    <section className="demo">
        <div className="container" >
            <div className="row" >
                {data.map((demo, index) => {
                    return (
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 demo-item" key={index} >
                            <div className="card" >
                                <img src={demo.imageUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{demo.skinName}</h5>
                                    <p className="card-text">{demo.des}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
</>
  )
}
