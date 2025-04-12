import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count : 0,
      count2 : 20,
      name :"dummy user"
    }

    console.log("constructor is called", this.props.name)
  }

  async componentDidMount(){
    console.log("componentDidMount is called", this.props.name)
    // const data = await fetch ("https://randomuser.me/api/");
    // const json = await data.json()
    // console.log("json", json)
    // const {name} = json?.results[0]
    // this.setState({name: name?.title +" "+ name?.first +" "+ name?.last})
    this.timer = setInterval(()=>{
      console.log("Interval is added")
    }, 1000)
  
  }

  componentDidUpdate( prevProps, prevState){
    console.log("state is updated", this.props.name)
    // if(this.state.count!==prevState.count){
    //   console.log("count is changed",  this.props.name)
    // }
    // if(this.state.count2!==prevState.count2){
    //   console.log("count2 is changed",  this.props.name)
    // }
  }

  componentWillUnmount(){
    console.log("componentWillUnmount is called", this.props.name)
    // clearInterval(this.timer)
  }
  render() {
    console.log("render is called",  this.props.name)
    return (
      <>
        <div>I am a User component (class based) - {this.state.name}</div>;
        <div className="flex gap-3 items-center">
          <button
            disabled={this.state.count === 0}
            className={`p-2 bg-red-400  ${
              this.state.count === 0 ? "cursor-not-allowed opacity-40" : ""
            }`}
            onClick={() => this.setState({count : this.state.count-1})}
          >
            Decrement
          </button>
          <div>Count is : {this.state.count}</div>
          <button
            className="p-2 bg-green-400"
            onClick={() => this.setState({count : this.state.count+1})}
          >
            Increment
          </button>
        </div>
        <div className="flex gap-3 items-center">
          <button
            disabled={this.state.count2 === 0}
            className={`p-2 bg-red-400  ${
              this.state.count2 === 0 ? "cursor-not-allowed opacity-40" : ""
            }`}
            onClick={() => {this.setState({count2 : this.state.count2-1});
          console.log("state changed", this.state)}}
          >
            Decrement
          </button>
          <div>Count2 is : {this.state.count2}</div>
          <button
            className="p-2 bg-green-400"
            onClick={() => {this.setState({count2 : this.state.count2+1});
          console.log("state changed", this.state)}}
          >
            Increment
          </button>
        </div>
      </>
    );
  }
}

export default UserClass;
