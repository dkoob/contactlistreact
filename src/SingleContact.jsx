function SingleContact({contact}) {
    return (
        <div>
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.address.suite}, {contact.address.street}, {contact.address.city}, {contact.address.zipcode}</p>
            <h4>{contact.company.name}</h4>
            <p>{contact.company.catchPhrase}</p>
            <p>{contact.company.bs}</p>
            <p>{contact.website}</p>
        </div>

    )
}

export default SingleContact