import React, {useEffect, useLayoutEffect } from 'react';

const LongBreakComponent = (props) => {


    useLayoutEffect(() => {

      document.body.style.backgroundColor = "#86526c"
      document.getElementById('crd_body').style.backgroundColor = "#a97b92"
       document.getElementById("lbBTN").style.backgroundColor = "#86526c"
        document.getElementById("sbBTN").style.backgroundColor = "#a97b92"
        document.getElementById("wBTN").style.backgroundColor = "#a97b92"
        props.setLbreakEstim(3)

    },[]);



    return (<div className=" row">

        <div className="col-12">
            <p className="m-5  font-weight-bold timer-text"> {props.showTime()}</p>

        </div>

        <div className="col-12">
            <button className="startBut prm-btn bg-white shadow-lg rounded-0 border-0" style={{color: "#86526c"}}  onClick={props.toggleStart}>
                {!props.start ? "START" : "STOP"}
            </button>

        </div>

    </div>);

}

export default LongBreakComponent;