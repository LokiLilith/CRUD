import './app-info.css';

const AppInfo= ({employees,primed}) =>{
   return(
      <div className="app-info">
      <h1>Учет сотрудников компании N</h1>
      <h2>Общее число сотрудников:{employees} </h2>
      <h2>Премию получат: {primed} </h2>
      </div>
   )

}

export default AppInfo;