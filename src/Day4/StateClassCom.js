import React,{Component} from "react";
class StateClassCom extends Component 
{
   
   
    state={
        color:"Yellow",
        price:150
    }
   handelChange=()=>{this.setState({color:"Red"})}
   handleChangeprice=()=>{this.setState({price:170})}

    render()
    {
        return(
          <div>
            <h1>I am want wear a dress in color of {this.state.color} and the price of my dress id {this.state.price}</h1>
            <button onClick={this.handelChange}>Clcik me</button>
            <button onClck={this.handleChangeprice}>click button</button>
          </div>
        )
    }
}
export default StateClassCom;