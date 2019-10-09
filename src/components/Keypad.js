import React from 'react'

export default class Keypad extends React.Component{
    constructor(){
        super()

        this.state={


        }
    }

    handlePassword=()=>{

        console.log('Entering password...')
    }

    render(){
        return <input onKeyUp={this.handlePassword} type="password" />
    }
}