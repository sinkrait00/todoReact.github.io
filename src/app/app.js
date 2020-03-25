import React from 'react';

import AppTitle from './app-title';
import SearchPanel from './search-panel';
import TodoList from './todo-list';
import AddListItemButton from './add-list-item-button';

import './app.css';
class App extends React.Component {
 
  globalId=100;

  state ={
    db : [
      {task: "drink coffee", important: false, done:false,id:1},
      {task: "walk with dog", important: false, done:false,id:2},
    ],
    term: ""
  } 

  deleteItem = (id) =>{
    this.setState(({db})=>{
      console.log(id);
      const index = db.findIndex((el)=>el.id===id);
      const newDb = [
        ...db.slice(0,index),
        ...db.slice(index+1)
      ];
      return{
        db : newDb
      }
    })
  }

  addItem = (text)=>{
    
    const newItem = {
      task: text,
      important: false,
      done: false,
      id: this.globalId++
    };
    this.setState(({db})=>{
      
      const newDb = [...db, newItem];
      return {
        db: newDb
      }
    })
  }
  impToggle = (id)=>{
    this.setState(({db})=>{
      return{
      db:this.editPropertys(db,id,'important')
      }
    })
  }

  doneToggle = (id)=>{
    this.setState(({db})=>{
      return{
      db:this.editPropertys(db,id,'done')
      }
    })
  }
  editItemText=(id,text)=>{
    this.setState(({db})=>{
      const index  = db.findIndex(el=>el.id===id);
      const foundTask = db.find(el=>el.id===id);
     foundTask.task= text;
      const newDb =[...db.slice(0,index), foundTask, ...db.slice(index+1)];
      return{
      db:newDb
     }
    });
  }
  editPropertys = (db,id,propName)=>{
   
    const index  = db.findIndex(el=>el.id===id);
    const foundTask = db[index];
   const newItem = {
     ...foundTask, [propName] : !foundTask[propName]
   }
    const newDb =[...db.slice(0,index), newItem, ...db.slice(index+1)];
    return newDb;
  }


  searchItem = (db,term)=>{
    if(term===""){
      return db;
    }
    return db.filter((item)=>{
      return item.task.toLowerCase().indexOf(term.toLowerCase()) >-1;
    })
  }

  onSearchChange = (termText)=>{
    const term= termText;
    this.setState({term});
  }
  
  render(){
  const {db,term} = this.state;
  const visibleItems= this.searchItem(db,term);

  const impCount = db.filter(el=>el.important).length;
  const doneCount = db.filter(el=>el.done).length;
    return (
      <div className="container">
        <div id="todoList">
        <div className="header">
        <SearchPanel onSearchChange={this.onSearchChange} />
        <AppTitle imp={impCount} done={doneCount} />
       
        </div>
        <TodoList 
        info={visibleItems}
        onDeleted={this.deleteItem}
        onEdit={this.editItemText} 
        impHandler = {this.impToggle}
        doneHandler = {this.doneToggle}
        />
        <AddListItemButton 
        onAddItem = {this.addItem}/>
        </div>
      </div>
    );
  }
}
  export default App;