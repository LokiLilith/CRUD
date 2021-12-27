import { Component } from 'react';
import './search-pannel.css';

class  SearchPannel extends Component{
   constructor(props) {
      super(props);
      this.state={
         term:""
      }
   }
   onUpdateSearch = (e) =>{
   const term = e.target.value;
   this.setState({term})
   this.props.onUpdateSearch(term);
   }
   
   render(){
      return(
         <input 
         onChange={this.onUpdateSearch}
            type="text"
            className="form-control searc.input"
            placeholder="Найти сотрудника"/>
      )
   }
}

export default SearchPannel;