import axios from "axios";
const URL = 'http://localhost:3001/persons'


export const getAll = async () => {
    const { data = []} = await axios.get(URL);
    return data;
}

export const update = async (id, data) => {
    const response = await axios.put(URL + '/' + id, data);
    return response.data;
}


export const create = async (data) => {
    const response = await axios.post(URL, data);
    return response.data;
}

export const remove = async (id) => {
    const response = await axios.delete(URL + '/' + id);
    return response.data;
}
