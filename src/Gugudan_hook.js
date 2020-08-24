import React, {useState, useRef} from 'react';
import './App.css';

const Gugudan_hook = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random()*9));
    const [second, setSecond] = useState(Math.ceil(Math.random()*9));
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const inputRef = useRef(null)

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }
    
    const onSubmitForm = (e) => {
        e.preventDefault();
       
        if(parseInt(value) === first * second){
            setResult('correct : ' + value);
            setFirst(Math.ceil(Math.random()*9));
            setSecond(Math.ceil(Math.random()*9));
            setValue("");
            inputRef.current.focus();
            
        } else {
            setResult('inCorrect');
            setValue('');
            inputRef.current.focus();
        }
    }

    return (
        <>
            <h1>Hooks!</h1>
            <div>{first}곱하기{second}는?</div>
            <form onSubmit={ onSubmitForm }>
                <input ref={ inputRef } type="number" value={ value } onChange={ onChangeInput }/>
                <button>입력</button>                
            </form>
            <div>
                {result}
            </div>
        </>
    )
}


  
  export default Gugudan_hook;