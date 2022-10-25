import React, {useEffect, useLayoutEffect, useState} from 'react';
import Banner from "../img/pp.png";

const ShortBreakComponent = (props) => {

    useEffect(() => {
        props.setSeconds(5);
    }, [])

    useLayoutEffect(() => {
       // document.body.style.backgroundImage = `url(${Banner})`
       // document.body.style.backgroundSize = "100%"

         document.body.style.backgroundColor = "#208a6c"
         document.getElementById('crd_body').style.backgroundColor = "#5ca490"
         document.getElementById("lbBTN").style.backgroundColor = "#5ca490"
         document.getElementById("sbBTN").style.backgroundColor = "#208a6c"
         document.getElementById("wBTN").style.backgroundColor = "#5ca490"
        if (props.seconds == 0) {
            props.setLbreakEstim(l => props.lbreakEstim - 1)
        }
    }, []);

    useEffect(() => {
        if (props.lbreakEstim == 0) {
            props.selectType("lb")
        }
        console.log(props.lbreakEstim)

    }, [props.lbreakEstim])

    return (<div className=" row">

        <div className="col-12">
            <p className="m-5  font-weight-bold timer-text"> {props.showTime()}</p>

        </div>

        <div className="col-12">
            <button className="startBut prm-btn bg-white shadow-lg rounded-0 border-0" style={{color: "#208a6c"}} onClick={props.toggleStart}>
                {!props.start ? "START" : "STOP"}
            </button>

        </div>

    </div>);

}

export default ShortBreakComponent;