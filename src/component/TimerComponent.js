import React, {useEffect, useRef, useState} from 'react';
import {useAudioPlayer} from "react-use-audio-player"
import {Card, CardBody} from "reactstrap";
import StartWorkComponent from "./timer/StartWorkComponent";
import ShortBreakComponent from "./timer/ShortBreakComponent";
import LongBreakComponent from "./timer/LongBreakComponent";
import Test1 from "./timer/test1";
import Test2 from "./timer/test2";

const time = {
    w: 5,
    sb: 2,
    lb: 3
}

const TimerComponent = (props) => {

    const [type, setType] = useState('w');
    const [lbreakEstim, setLbreakEstim] = useState(3);
    const [start, setStart] = useState(false);
    const [seconds, setSeconds] = useState(time.w);
    const ref = useRef(true);
    const [audio, setAudio] = useState(new Audio("/audios/winfretless.mp3"));
    const tick = useRef();


    useEffect(() => {

        if (ref.current) {
            ref.current = !ref.current;
            return;
        }

        if (start) {
            tick.current = setInterval(() => {


                setSeconds((seconds) => seconds == 0 ? 0 : seconds - 1)
            }, 1000);
        } else {
            clearInterval(tick.current)
        }

        return () => clearInterval(tick.current)

    }, [start])

    useEffect(() => {
        let timeout = null
        if (seconds == 0) {
            setStart(false)

            audio.play()
            timeout = setTimeout(async () => {
                await audio.pause();

            }, 3000)
            switch (type) {
                case 'w':
                    setType("sb")
                    setSeconds(time.sb)
                    break;
                case 'sb':
                    setType("w")

                    setSeconds(time.w)
                    break;
                case 'lb':
                    setType("w")
                    setSeconds(time.w)
                    break;
            }
        }
        return () => clearTimeout(timeout)

    }, [seconds])

    const showTime = () => {
        const minutes = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return (minutes + " : " + (sec == 0 ? "00" : sec.toString()))
    }


    const toggleStart = async () => {
        setStart(!start)
    }


    const selectType = (type) => {

        if (type === "w") {
            setSeconds(time.w)
            setType('w')
        } else if (type === "sb") {
            setSeconds(time.sb)

            setType('sb')
        } else if (type === "lb") {
            setSeconds(time.lb)
            setType('lb')
        } else {
            setSeconds(time.w)
            setType(time.w)
        }
    }


    return (<div>
        <Card className="text-center border-0 rounded-0" >
            <CardBody id="crd_body" className="" >

                <div className="btn-group btn-group-lg rounded-0 w-100 opacity-100" role="group"
                     aria-label="Basic example">
                    <button type="button"
                            id="wBTN"
                            className={type === "w" ? 'btn text-white shadow-lg rounded-0' : 'btn text-white rounded-0'}
                            onClick={() => selectType('w')}>Go To
                        Work
                    </button>
                    <button type="button"
                            id="sbBTN"
                            className={type === "sb" ? 'btn text-white shadow-lg rounded-0' : 'btn text-white rounded-0'}
                            onClick={() => selectType('sb')}>Short
                        Break
                    </button>
                    <button type="button"
                            id="lbBTN"
                            className={type === "lb" ? 'btn text-white shadow-lg rounded-0' : 'btn text-white rounded-0'}
                            onClick={() => selectType('lb')}>Long
                        Break
                    </button>
                </div>


                {type === "w" ? <StartWorkComponent setSeconds={() => setSeconds}
                                                    seconds={seconds}
                                                    start={start}
                                                    lbreakEstim={lbreakEstim}
                                                    setLbreakEstim={setLbreakEstim}
                                                    showTime={showTime}
                                                    toggleStart={toggleStart}/> : <></>}

                {type === "sb" ? <ShortBreakComponent setSeconds={() => setSeconds}
                                                      seconds={seconds}
                                                      start={start}
                                                      lbreakEstim={lbreakEstim}
                                                      setLbreakEstim={setLbreakEstim}
                                                      showTime={showTime}
                                                      selectType={selectType}
                                                      toggleStart={toggleStart}/> : <></>}
                {type === "lb" ? <LongBreakComponent setSeconds={() => setSeconds}
                                                     seconds={seconds}
                                                     start={start}
                                                     lbreakEstim={lbreakEstim}
                                                     setLbreakEstim={setLbreakEstim}
                                                     showTime={showTime}
                                                     toggleStart={toggleStart}/> : <></>}

            </CardBody>
        </Card>
    </div>);
}

export default TimerComponent;