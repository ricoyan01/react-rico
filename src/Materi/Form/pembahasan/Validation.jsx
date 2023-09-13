import React from "react";

const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label>{label}:</label>
                <br />
                <input type={type} name={name} onChange={e => onChange(e.target.value)}/>
            <br />
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return (
        <ul style={{ color: 'red', marginLeft: '-20px' }}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}

export default class Validation extends React.Component {
    state = {
        email:'',
        password:'',
        errors: []
    }

    handleSubmit = e =>{
    e.preventDefault();
    const { email, password} = this.state;

    let message = [];

    if (email.length === 0) {
        message = [...message, 'Email tidak boleh kosong'];
    }
    if (password.length === 0) {
        message = [...message, 'Password tidak boleh kosong'];
    }
    if (password.length < 10) {
        message = [...message, 'Password minimal 10 Karakter'];
    }

    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(email).toLowerCase())) {
        message = [...message, 'Email tidak valid']
    }
    if (message.length > 0) {
        this.setState({
            errors: message
        });
    }
    else {
        alert(
            `email: ${this.state.email},
            password: ${this.state.password}`
        );
        this.setState ({
            errors: []
        })
    }
    }
    render() {
        return(
            <div>
                <form 
                    onSubmit={this.handleSubmit} 
                    style={{ margin: '100px 800px 100px', 
                    border: '2px solid', 
                    padding: '30px' }}>
                    {
                        this.state.errors && <ShowErrors errors={this.state.errors}/>
                    }
                    <h4>Form Register</h4>
                    <Input 
                    type="email" 
                    name="email" 
                    label="Email"
                    onChange={value=> this.setState({email: value})}/>
                    <Input 
                    type="password" 
                    name="password" 
                    label="Password"
                    onChange={value => this.setState({password: value})}/>
                    <br />
                    <button type="submit">Daftar</button>
                </form> 
            </div>
        )
    }
}