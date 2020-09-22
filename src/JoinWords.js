import React from 'react';
import './App.css';

class JoinWords extends React.Component {
    state = {
        word: "개나리",
        value: "",
        result: "",
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.word[this.state.word.length - 1] === this.state.value[0]){
            this.setState({
                result: "딩동댕",
                word: this.state.value,
                value: "",
            })
            this.input.focus();
        } else {
            this.setState({
                result: "땡",                
                value: "",
            })
            this.input.focus();
        }
    }

    onChangeInput = (e) => {
        this.setState({ value: e.target.value });
    }

    input; 

    onRefInput = (c) => {
        this.input = c;
    }

    render() {
        // console.log("redering");
        return (
            <>
                <h1>끝말잇기 Class</h1>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </>
        )
    }
}

export default JoinWords;