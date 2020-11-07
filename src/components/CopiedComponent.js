import React,  {useState, useEffect} from 'react'
import { Progress } from 'semantic-ui-react'
import "./CopiedComponent.css";

const CopiedComponent = ({show}) => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {

        if(show === true){
            setDisplay(true)
            setTimeout(() =>  setDisplay(false), 500)
        } else {
            setDisplay(false)
        }
    }, [show]);

    return (
        <>
        {(display) ? <div id="progress-container">
                <p>Copied to your clipboard</p>
                <Progress id="progress" percent={100} active size="tiny">
                
                </Progress>
            </div> : ""}
            
        </>
    )
}

export default CopiedComponent
