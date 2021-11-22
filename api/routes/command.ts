import commandController from '../controllers/command';
import axios from 'axios';

const commandRouter = axios.post('./api/command', commandController); 

export default commandRouter