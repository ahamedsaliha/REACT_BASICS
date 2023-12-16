

class Practice extends Component 
{
    state={
        color:'yellow',
        age:19
    }

    handelChange=()=>(this.setState({color:'red'}));
    handleAge=()=>(this.setState({age:20}))

    render()
    {
        return(
            <div>
               <h1>the color is {this.state.color}</h1>
             <h1>age is {this.state.age}</h1>
             <button onClick={this.handelChange}>click me</button>
             <button onClick={this.handleAge}>click</button>

            </div>
            
        )
    }
}