import React, { Component } from 'react';



export const MesContext = React.createContext(); 
export class MessengerProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart: [],
            cert: []
        }

        this.onClickMessenge = this.onClickMessenge.bind(this);
        this.unmountMes = this.unmountMes.bind(this);
        this.removeMes = this.removeMes.bind(this);
        this.remountMes = this.remountMes.bind(this);
        this.removenotMes = this.removenotMes.bind(this);
        
    }



    onClickMessenge(mes) {
        console.log(this.state.cart)
        this.setState({ 
            cart: this.state.cart.concat(mes)
        });
    }

    unmountMes(ms){
        console.log(this.state.cert)
        this.setState({
            cert: this.state.cert.concat(ms),
            cart: this.state.cart.filter(item => item != ms)
            
        })
    }
    removeMes(ms){
        console.log(this.state.cart)
        this.setState({ 
            cart: this.state.cart.filter(item => item != ms)
        })
    }

    remountMes(ms){
        this.setState({
            cart: this.state.cart.concat(ms), 
            cert: this.state.cert.filter(item => item != ms)
        });
        console.log(this.state.cert)
    }
    removenotMes(ms){
        console.log(this.state.cart)
        this.setState({ 
            cert: this.state.cert.filter(item => item != ms)
        })
    }

    render() {
        return (
            <MesContext.Provider 
            value={{
                cart:this.state.cart,
                cert: this.state.cert,
                onClickMessenge: this.onClickMessenge,
                unmountMes: this.unmountMes,
                removeMes: this.removeMes,
                removenotMes: this.removenotMes,
                remountMes: this.remountMes
            }}
            >
                {this.props.children}
            </MesContext.Provider>
        )
    }
}

