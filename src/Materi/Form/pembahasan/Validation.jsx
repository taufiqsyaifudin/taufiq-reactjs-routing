import React from "react";

const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label> {label}:</label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)}/>
            <br />
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: 'red', marginLeft: '-20px'}}>
        {
            errors.map((error, i) => <li key={i}>{error}</li>)
        }
        </ul>
    )
}

class Validation extends React.Component {
    state = {
        email: '',
        nama: '',
        password: '',
        telepon: '',
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        const {email, nama, password, telepon} = this.state;

        let message = [];

        if(email.length === 0) {
            message = [...message, 'Email tidak boleh kosong'];
        }

        if(nama.length === 0) {
            message = [...message, 'Nama tidak boleh kosong'];
        }

        if(password.length === 0) {
            message = [...message, 'Password tidak boleh kosong'];
        }
        if(telepon.length === 0) {
            message = [...message, 'No. Telepon tidak boleh kosong'];
        }

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(email).toLowerCase())) {
            message = [...message, 'Email tidak valid'];
        }
        

        if(password.length < 8) {
            message = [...message, 'Password terlalu pendek'];
        }

        if(message.length > 0) {
            this.setState({
                errors: message
            });
        }else {
            alert(`
                email: ${this.state.email}
                nama: ${this.state.nama}
                password: ${this.state.password}
                telepon: ${this.state.telepon}
            `);
            this.setState({
                errors: []
            })
        }

        // let data = { email, password };
          
        //   let rules = {
        //     email: 'required|email',
        //     password: 'min:8|required'
        //   };
          
        //   let validation = new Validator(data, rules);
        //   validation.passes(); 
        //   this.setState({
        //       errors: [
        //           ...validation.errors.get('email'),
        //           ...validation.errors.get('password')
        //       ]
        //   })
    }

    render() {
        const style = {
            width: '400px',
            margin: '100px 30px',
            border: '1px solid black',
            padding: '10px'
        }

        return (
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                <h4>Registrasi Page</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input type="email" name="email" label="Email" 
                    onChange={value => this.setState({email: value})}/>
                    <Input type="text" name="nama" label="Nama Lengkap"
                    onChange={value => this.setState({nama: value})}/>
                    <Input type="password" name="password" label="Password" 
                    onChange={value => this.setState({password: value})}/>
                    <Input type="number" name="telepon" label="No. Telepon" 
                    onChange={value => this.setState({telepon: value})}/>
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Validation;