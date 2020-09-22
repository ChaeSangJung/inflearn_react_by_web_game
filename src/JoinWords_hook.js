import React, {useState, useRef} from 'react';
import './App.css';

const JoinWord_hook = () => {
    const [word, setWord] = useState("개나리");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const inputEl = useRef(null);
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length - 1] === value[0] ) {
            setResult("딩동댕");
            setWord(value);
            setValue("");
            inputEl.current.focus();
        } else {
            setResult('땡');
            setValue('');
            inputEl.current.focus();
        }
    }
    return (
        <>
            <h1>끝말잇기 Hooks!</h1>
            <div>{word}</div>            
            <form onSubmit={onSubmitForm}>
                <input 
                    ref={inputEl}
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                />
                <button>입력</button>
            </form>
            <div>{result}</div>
        </>
    )
}


  
  export default JoinWord_hook;