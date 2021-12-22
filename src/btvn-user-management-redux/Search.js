import React, { Component } from "react";
import {connect} from "react-redux"
import {actGetKeyWord} from "./../redux/actions"

class Search extends Component {
  handleOnchange= (event)=>{
    const {value} = event.target
    
    // this.props.getKeyWord(value);
    this.props.keyword(value);

  }
  render() {
    return <input type="text" className="form-control mb-3 w-50"  onChange={this.handleOnchange}/>;
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    keyword: (key)=>{
      dispatch(actGetKeyWord(key));
    },
  };
};
export default connect (null,mapDispatchToProps)(Search);
