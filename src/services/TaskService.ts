import http from './HttpService';

const taskApiEndpoint: string = process.env.REACT_APP_taskApiEndpoint || '';

export async function getTasks() {

    console.log(process.env.REACT_APP_taskApiEndpoint);
    const result = await http.get(taskApiEndpoint);

    return result.data;
}