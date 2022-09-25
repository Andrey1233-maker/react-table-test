import axios from 'axios';
import { nodePathQueryCreator } from '../apiPath';

export async function getNodes(action) {
    try{
        const nodes = (await axios.get(nodePathQueryCreator(action.page, action.field, action.typeFilter, action.value))).data
        return nodes
    }
    catch(e) {
        throw e
    }
}