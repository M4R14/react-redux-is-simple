import React, { Component } from 'react';
import {connect} from 'react-redux';

class User extends Component {
    
  render() {
    return (
        <div>
            <h1>User:{this.props.username}</h1>
            <button onClick={()=>{
                this.props.SET_NAME("Mark"); 
                this.props.SET_LOGO();
                }}>I'm Mark</button>
        </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    user:state.user,
    emp:state.emp,
    layout:state.layout
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    SET_NAME:(name)=>{
      dispatch({
        type: "SET_NAME",
        playload: name
      });
    },
    SET_LOGO:()=>{
      dispatch({
        type: "SET_LOGO",
        playload: "http://bulma.io/images/bulma-logo.png"
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
