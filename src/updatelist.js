import React,{ Component } from "react";

class Updatetodo extends Component{
    state={
        content:'',
    }
    handlechange=(e)=>{
       this.setState({
           content : e.target.value
       }) 
    }
    handlesubmit = (e) => {
        e.preventDefault();
        this.props.temp(this.state);
        this.setState({
            content:""
        })

    }
    render(){
        return(
            <div className="updatelist"> 
            <form onSubmit={this.handlesubmit}>
            <input class="inputtype"type="text" onChange={this.handlechange} value={this.state.content}/>
            <label className="newones"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Add New Standard </label>
            

            </form>

            </div>
        )
    }
}
export default Updatetodo;