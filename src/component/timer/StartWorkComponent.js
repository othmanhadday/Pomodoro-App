import React, {useEffect, useLayoutEffect} from 'react';


const StartWorkComponent = (props) => {

    useEffect(()=>{
        props.setSeconds(1500);
    })

    useLayoutEffect(() => {
      //  document.body.style.backgroundImage = "url('/pp.webp'})!important"

        document.body.style.backgroundColor = "#b74443"
        document.getElementById('crd_body').style.backgroundColor = "#c25e5d"
        document.getElementById("lbBTN").style.backgroundColor = "#c25e5d"
        document.getElementById("sbBTN").style.backgroundColor = "#c25e5d"
        document.getElementById("wBTN").style.backgroundColor = "#b74443"

    },[]);

    return (<div className=" row">

        <div className="col-12">
            <p className="m-5  font-weight-bold timer-text text-white"> {props.showTime()}</p>

        </div>

        <div className="col-12">
            <button className="startBut prm-btn bg-light shadow rounded-0 border-0 " style={{color:"#b74443"}} onClick={props.toggleStart}>
                {!props.start ? "START" : "STOP"}
            </button>

        </div>

    </div>);

}

export default StartWorkComponent;