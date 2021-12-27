import { Component } from 'react';
import './employes-add-form.css';

class EmployesAddForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            salary:""
        }
    }

    onValueChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

  onSubmit = (e) =>{
    e.preventDefault();
      if(this.state.name.length <3||!this.state.salary) return;
      this.props.onAdd(this.state.name,this.state.salary)
      this.setState({
          name:"",
          salary:""
      })
  }

  render(){
      const{name,salary}=this.state;
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    name="name"
                    value={name}
                    placeholder="Как его зовут?" 
                    onChange={this.onValueChange}/>
                <input type="number"
                    className="form-control new-post-label"
                    name="salary"
                    value={salary}
                    placeholder="З/П в $?" 
                    onChange={this.onValueChange}/>
  
                <button type="submit"
                        className="btn btn-outline-light" onClick={this.onSubmit}>Добавить</button>
            </form>
        </div>
    )
  }
}

export default EmployesAddForm;