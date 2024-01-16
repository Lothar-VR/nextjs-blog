
import axios from "axios";

  
export default class HatenaArticleListRepository {


    getArticle = () => {
        return axios.get('api/hatenaArticleList');
    }
}


