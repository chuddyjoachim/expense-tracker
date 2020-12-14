import React from 'react'
import money from '../../svg/money-transfer.svg'
import './calcfield.scss'

 function Calcfield({title, imgSrc, amnt}) {
    return (
        <>
        <div className="wrapset_">
            <div className="top__">
                <div className="dv_hld">
                    <div className="sng__">
                       <div className="wrap__">
                       <h3 className="title__">
                       {title}
                        </h3>
                        <div className="icon">
                            <img src={imgSrc} alt={imgSrc}/>
                        </div>
                        <h4 className="int">
                            <div>$</div> {
                                amnt?
                                amnt.reduce((x,y)=>{
                                   return x += parseInt(y.amount)
                                },0): ""
                            }
                        </h4>
                       </div>
                    </div>
                </div>
            </div>
        </div>            
        </>
    )
}
export {Calcfield}
