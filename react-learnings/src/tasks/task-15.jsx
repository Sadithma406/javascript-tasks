import { useState } from 'react';
function Supporter(props) {
    return (
        <>
            <h2>Hello {props.name}</h2>
            <p>You are {props.age} years old. </p>
        </>
    )
}

function Task15() {
    const [count, setCount] = useState(0);
    function handleButtonClick() {
        setCount(count + 1);
    }
    return (
        <div>
            <Supporter name="Sadithma" age={19} />
            <p>This is a Paragraph</p>
            <h1>hello</h1>
            {(1 === 2) && <h2>1 is equal to 2</h2>} {/*will not be printed*/}
            {(1 === 1) && <h2>1 is equal to 1</h2>} {/*will be printed*/}


            <button onClick={handleButtonClick}>CLICK ME (Count: {count})</button>

        </div>
    )
}
export default Task15;
