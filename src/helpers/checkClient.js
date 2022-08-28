import axios from 'axios'

export const checkClient = async (dni, clave) => {

    try {
        const response = await axios.get('clients.json');
        const account = response.data.accounts.filter(account => account.dni === dni && account.clave === clave)
        if(account.length > 0) {
            localStorage.setItem('account', dni)
            return account
        } else {
            alert('Credentials not found')
        }
    } catch (error) {
        console.error(error)
    }
};
