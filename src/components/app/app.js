import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPannel from '../search-pannel/search-pannel';
import AppFilter from '../app-filter/app-filter';
import EmployesList from '../employes-list/employes-list';
import EmployesAddForm from '../employes-add-form/employes-add-form';


class App extends Component{
   constructor(props){
      super(props);
      this.state={
         data :[
            {name: "John C", salary:800 , prime:true, rise:true, id:1},
            {name: "Alex W", salary:1900 , prime:false, rise:false, id:2},
            {name: "Clarc C", salary:8000 , prime:false, rise:false, id:3}
            ],
            term:"",
            filter:"all"
      }
      this.maxId=4;
   }

deleteItem = (id) =>{
   this.setState(({data})=>{
      return{
         data:data.filter(item=>item.id !==id)
         /* data: data.filter((item) => {
            debugger;
            return item.id !== id
         }) */
      }
   })
}
onToggleProp = (id,prop) =>{
   this.setState(({data})=>({
      data:data.map(item=>{
         if(item.id===id){
            return{...item,[prop]:!item[prop]}
         }
         return item
      })
   }))
}

addItem =(name,salary)=>{
   const newItem={
      name,
      salary,
      prime:false,
      id:this.maxId++
   }
   this.setState(({data})=>{
      const newArr=[...data,newItem]
      return{
         data:newArr
      }
   })
}

searchEmp = (items,term) =>{
if(term.length===0) return items;
return items.filter(item=>{
   return item.name.indexOf(term)>-1
})
}
onUpdateSearch = (term) =>{
this.setState({term});
}


filterEmp = (items,filter) =>{
if(filter==="rise"){
  return items.filter(item=>item.rise)
}
if(filter==="1000+"){
  return items.filter(item=>item.salary>1000)
}
if(filter==="all"){
   return items;
}
}
onFilterSelect = (filter) =>{
this.setState({filter})
}

 render(){
    const{data,term,filter}=this.state; 
    const employees = this.state.data.length;
    const primed = this.state.data.filter(e=>e.prime).length;
    const visibleData=this.filterEmp(this.searchEmp(data,term),filter)
    
   return(
      <div className="app">
         <AppInfo
         employees={employees}
         primed={primed}/>

         <div className="search-pannel">
         <SearchPannel
         onUpdateSearch={this.onUpdateSearch}/>
         <AppFilter
         onFilterSelect={this.onFilterSelect}
         filter={filter}/>
         </div>

         <EmployesList data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}/>
         <EmployesAddForm
         onAdd={this.addItem}/>
      </div>
   )
 }
}

export default App;