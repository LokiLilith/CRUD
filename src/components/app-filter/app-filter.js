
import './app-filter.css';

const AppFilter =(props)=> {
  const{filter,onFilterSelect}=props;   

     const all ="all",
          rise = "rise",
           kk= "1000+"
     
   const active1 = filter===all ;
   const clazz1 = active1 ?   'btn-outline-light':'btn-light'     
   const active2 =  filter===rise ;
   const clazz2 = active2 ?   'btn-outline-light':'btn-light'   
   const active3 = filter === kk;
   const clazz3 = active3 ?   'btn-outline-light':'btn-light'     
            
          


     return(
          <div className="btn-group">
             <button 
                   onClick={()=>onFilterSelect(all)}
                   
                   className={`btn ${clazz1}`}
                   type="button">
                        Все сотрудники
             </button>
             <button 
                   onClick={()=>onFilterSelect(rise)}
                   className={`btn ${clazz2}`}
                   type="button">
                        Сотрудники на повышение
             </button>
             <button 
                   onClick={()=>onFilterSelect(kk)}
                   className={`btn ${clazz3}`}
                   type="button">
                        З/П больше 1000$
             </button>
          </div>
     );
  
}

export default AppFilter;