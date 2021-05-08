export const createContact=(contact) => {
    return {
        type: 'CREATE_CONTACT',
        payload: contact
    }
}

export const deleteContact = (id) => {
    return {
        type: 'REMOVE_CONTACT',
        id: id
    }
}