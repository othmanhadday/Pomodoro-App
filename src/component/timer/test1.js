import React, {useEffect, useRef, useState} from 'react';
import shortBreakComponent from "./ShortBreakComponent";


const Test1 = (props) => {



    useEffect(()=>{
        props.setSeconds(5);
    },[])

    return (<div className=" row">

        <div className="col-12">
            <p className="m-5  font-weight-bold timer-text"> {props.showTime()}</p>

        </div>

        <div className="col-12">
            <button className="startBut" onClick={props.toggleStart}>
                {!props.start ? "START" : "STOP"}
            </button>

        </div>

    </div>);

}

export default Test1;