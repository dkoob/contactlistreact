function allContacts({contacts, hash}) {
    return (
        <ul>
            {contacts.map((contact) => {
                return (
                    <li key={contact.id}>
                        <a href={`#${contact.id === hash ? "" : contact.id}`}>
                            {contact.name}
                        </a>
                    </li>
                )       
            })}
        </ul>
    )
}

export default allContacts