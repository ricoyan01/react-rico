import React from "react";

export default class FormElement extends React.Component{
    state = {
        Email:'',
        Password:''
    }

    handleSubmit = () => {
        alert(
            `email: ${this.state.Email},
            password: ${this.state.Password}`
        )
    }

    render() {
        return (
        <div style={{ margin: '100px 800px 100px', border: '2px solid', padding: '20px' }}>
                <form>
                    <label>
                        Email : 
                        <br /><input 
                        type="email" 
                        name="Email" 
                        placeholder="Masukkan Email..." 
                        onChange={(e) => this.setState({Email: e.target.value})}/>
                    </label>
                    <br />
                    <label>
                        Password : 
                        <br /><input 
                        type="password" 
                        name="Password"
                        placeholder="Masukkan password..." 
                        onChange={(e) =>this.setState({Password: e.target.value})}/>
                    </label>
                    <br />
                    <button 
                    type="submit" 
                    onClick={this.handleSubmit}>
                    Kirim
                    </button>
                </form>
        </div>
        )
    }
}