import axios from 'axios';
import { NODES_PATH } from '../apiPath';

export async function getNodes() {
    try{
        const nodes = (await axios.get(NODES_PATH)).data
        return nodes
    }
    catch(e) {
        throw e
    }
}