import axios from "axios";
import {environment} from "../../environment"

export default axios.create({
    baseURL: environment.API.base_url
});
