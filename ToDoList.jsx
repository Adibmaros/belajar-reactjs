import { useState } from "react";

function Content(){
    const [input,setInput] =useState("");
    const [list, setList] = useState([])
  
    function handleInput(e){
      setInput(e.target.value)
    }
  
    function handleSubmit(e){
      e.preventDefault()
      const data = {
        id : new Date().getSeconds(),
        text:input
      }
      setList([...list,data])
      setInput("")
    }

    function handleDelete(id){

        const dataku = list.filter(item => item.id !== id );
        setList(dataku)

    }
    return(
      <>
      <h3 className="text-center py-4" style={{ fontFamily: 'Roboto',  borderBottom: '2px solid #ccc', color: '#333' }}>Special To Do List</h3>
  
      <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4 mt-4">
        <input value={input} onChange={handleInput} className="form-control mr-2" style={{ borderRadius: '20px 0 0 20px', border: '2px solid #ccc' }} placeholder="Masukkan to do list" type="text" />
        <button className="btn btn-primary" style={{ borderRadius: '0 20px 20px 0', border: '2px solid #007bff', backgroundColor: '#007bff' }} type="submit">Tambah</button>
      </form>
    
      <ul className="list-group">
        {list.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '8px', marginBottom: '8px' }}>
            <span style={{ color: '#333' }}>{item.text}</span>
            <button onClick={ () => handleDelete(item.id)} className="btn btn-danger" style={{ borderRadius: '50%', padding: '8px 12px', backgroundColor: '#dc3545', borderColor: '#dc3545' }}>Hapus</button>
          </li>
        ))}
      </ul>
      </>
    )
  }

  export default Content