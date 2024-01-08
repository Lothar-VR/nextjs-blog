import axios, { AxiosPromise } from "axios"
import { error } from "console";
import xml2json from "xml2json"


export interface User {
userId: number;
userName: string;
}

const userId = process.env.HATENA_USER_ID;
const apikey = process.env.HATENA_API_KEY;
  
export default class HatenaArticleListRepository {


    getArticle = async(url: string) => {
        console.log(apikey, userId, url);
        try{
            if (userId !== undefined && apikey !== undefined){
                const res = await axios.get(url, {
                    headers: {
                        'Content-Type': 'application/xml',
                    },
                    auth: {
                        username: userId,
                        password: apikey,
                    },
                })
                return res;
            } else{
                throw error;
            }     
        }catch {
            throw error;
        }
    }
}


