import { useEffect, useState } from 'react'
import './App.css'
import AllContacts from "./AllContacts"
import SingleContact from './SingleContact'

function App() {

  const [contacts, setContacts] = useState([])
  const [hash, setHash] = useState(window.location.hash.slice(1)*1)

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
      const data = await response.json()
      setContacts(data)
    }
    fetchContacts()
  }, [])
  
  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash.slice(1)*1)
    })
  }, [])

  const contact = contacts.find((contact) => {
    return hash === contact.id
  })
  console.log(contact)

  return (
    <div>
      <h1>Contact List | ({contacts.length})</h1>
      <AllContacts contacts={contacts} hash={hash}/>
      <hr/>
      {
        contact ? (<SingleContact contact={contact}/>) : null
      }
    </div>
  )
}

export default App
