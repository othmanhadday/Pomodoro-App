import React, {useEffect, useState} from 'react';


const Test2 = ({selectType, type}) => {

    const [myInterval, setMyInterval] = useState(null);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(2);
    const [playingTimer, setPlayingTimer] = useState(false);
    const [playingAudio, setPlayingAudio] = useState(false);
    const [audio, setAudio] = useState(new Audio("/audios/winfretless.mp3"));

    useEffect(() => {
        if (type=='lb'){
            setPlayingAudio(false)
            setPlayingTimer(false)
            setSeconds(0)
            setMinutes(2)
            setMyInterval(null)
        }
    },[type])

    useEffect(() => {
        if (playingTimer) {
            setMyInterval(setInterval(async () => {
                await countDown()
            }, 1000))
        }
        return () => clearInterval(myInterval)
    }, [seconds])


    useEffect(() => {
        let timeout = null
        if (playingAudio) {
            audio.play()
            timeout = setTimeout(async () => {
                await audio.pause();
            }, 3000)
            selectType('w')
        }
        return () => clearTimeout(timeout)

    }, [playingAudio])


    const countDown = async () => {

        await setSeconds(seconds - 1)

        if (seconds === 0) {
            await setSeconds(5)
            await setMinutes(minutes - 1)
        }

        if (minutes === 0 && seconds === 0) {
            await setPlayingTimer(false)
            await setSeconds(0)
            await setMinutes(0)
            await stopTimer()
            playingAudio?await setPlayingAudio(false):await setPlayingAudio(true)
        }
    }

    const start = async () => {
        setPlayingTimer(true)
        await setSeconds(3)
        await setMinutes(minutes - 1)
        audio.pause()
    }

    const stopTimer = () => {
        setMyInterval(clearInterval(myInterval))
    }


    return (<div className=" row">

        <div className="col-12">
            <h1 className="m-5 font-weight-bold"> {minutes} : {seconds}</h1>

        </div>

        <div className="col-12">
            <button className="btn btn-secondary btn-lg mt-0" onClick={start}>Start</button>
        </div>

    </div>);

}

export default Test2;