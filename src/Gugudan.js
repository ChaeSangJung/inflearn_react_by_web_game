import React from 'react';
import './App.css';



class Gugudan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: Math.ceil(Math.random()*9),
            second: Math.ceil(Math.random()*9),
            value: '',            
            result: ''
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(parseInt(this.state.value) === this.state.first * this.state.second){
            this.setState((prevState) => { // 예전 상태값
                // console.log(prevState);
                return {
                    result: `${prevState.first} 곱하기 ${prevState.second} = ${prevState.value} 정답!`,
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9),
                    value: ''                
                };                
            });
            this.input.focus();
        } else {
            this.setState({
                result: '땡~!!!',
                value: ''
            })
        }
    }
    onChange = (e) => this.setState({ value: e.target.value })
    
    input;

    onRefInput = (c) => { this.input = c; } // 공식 외워~


    render() {
        // console.log("redering");
        return (
            <div>
                <div>{this.state.first}곱하기{this.state.second}는?</div>
                <form onSubmit={ this.onSubmit }>
                    <input ref={this.onRefInput} type="number" value={this.state.value} onChange={ this.onChange }/>
                    {/* input.onChange = (e) => { console.log(e.target.value) } */}
                    <button>입력</button>
                </form>
                <div>
                    {this.state.result}
                </div>
            </div>
        );
    }
  }
  
  export default Gugudan;