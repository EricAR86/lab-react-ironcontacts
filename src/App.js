
import './App.css';
import contacts from "./contacts.json"
import {useState} from 'react';


function App() {

  // ITERATION 1

  // crear estado para lista de contactos imprimiendo solo los primeros 5
  const [contactsList, setContactsList] = useState (contacts.slice(0,5))


  // ITERATION 3

  // funcion para crear un nuevo contacto al azar
  const addContact = () => {

    // genera numero al azar basado en la longitud de la lista de contactos (original)
    const randomNum = Math.floor(Math.random()*contacts.length)

    // se crea una constante par elegir a un contacto al azar (arreglo[posicion al azar dentro del arreglo])
    const newRandomContact = contacts[randomNum]
    
    // se crea un arreglo-copia de la lista de contactos
    const newContactList = [...contactsList]

    // se agrega a la copia un contacto al alzar
    newContactList.push(newRandomContact)
    
    // se cambia el estado (que contiene los 5 contactos + los agrergados al azar)  a la lista-copia usando setContactsList
    setContactsList(newContactList)

  }


  // ITERATION 4

  // function para ordenar lista por NOMBRE
  
  const sortByName = () =>{

    // Se hace copia de la lista y se ordena por orden alfabetico
    const name = [...contactsList].sort((a,b)=>a.name > b.name ? 1:-1)
    // Se actualiza el estado con el resultado de la variable name
    setContactsList(name)
  }

  // function para ordenar lista por POPULARIDAD
  const sortByPopularity = () =>{

    // Se hace copia de la lista y se ordena de mayor a menor
    const popularity = [...contactsList].sort((a,b)=>b.popularity - a.popularity)
    // Se actualiza el estado con el resultado de la variable popularity
    setContactsList(popularity)
  }
  

  // ITERATION 5

  // funcion para borrar contacto recibiendo el ID como parametro
  const deleteContact = (id) =>{
    // Se crea nueva lista y se filtra para buscar y ocultar el elemento con el ID que coincida
    const newArr = contactsList.filter(e=>e.id!=id)
    // Se actualiza el estado al nuevo arreglo
    setContactsList(newArr)
  }
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      {/* botones con funcion onClick para llamar a la respectiva funcion (add, sortby, delete) */}
      <button onClick={()=>addContact()}>Add Random Contact</button>
      <button onClick={()=>sortByName()}>Sort by name</button>
      <button onClick={()=>sortByPopularity()}>Sort by popularity</button>
        <table className='table'>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
          <tr>
              {/* ITERATION 1 */}
              {/* Metodo MAP para iterar por toda la lista de contactos e imprimir respectivos valores */}
              {contactsList.map((contact) => {
                return <tr key={contact.id}>
                  <td><img className='image' src={contact.pictureUrl} alt="contact-image" ></img></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>

                  {/* ITERATION 2 */}

                  <td>{contact.wonOscar ? <span>🏆</span> : <span></span>}</td>
                  <td>{contact.wonEmmy ? <span>🏆</span> : <span></span>}</td>
                  {/* ITERATION 5 */}
                  {/* Envia el ID como argumento a la funcion borrar contacto */}
                  <td><button onClick={()=>deleteContact(contact.id)}>Delete</button></td>
                </tr>
              })}
          </tr>
        </table>
      
    </div>
  );
}

export default App;
