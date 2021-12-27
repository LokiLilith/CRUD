import EmployesListItem from "../employes-list-item/employes-list-item";
import './employes-list.css'; 

const EmployesList = ({data,onDelete,onToggleProp,onChangeSalary}) =>{

   const elements =data.map(item=>{
    return(
      <EmployesListItem name={item.name} salary={item.salary} prime={item.prime} key={item.id} rise={item.rise}
      onDelete={()=>onDelete(item.id)}
      onChangeSalary={onChangeSalary}
      onToggleProp={(e)=>onToggleProp(item.id,e.currentTarget.getAttribute('data-toggle'))}/>
    )
   });
   return(
      <ul className="app-list list-group">
       {elements}
      </ul>
   )
}
export default EmployesList;  