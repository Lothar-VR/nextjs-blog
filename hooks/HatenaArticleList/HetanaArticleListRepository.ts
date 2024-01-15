
import axios from "axios";

  
export default class HatenaArticleListRepository {


    getArticle = async() => {
        try{
            // データタイプを作成して受け取ったデータを使えるようにする
            const res = await axios.get('api/hatenaArticleList')
            return res;
   
        }catch {
            console.log("Error");
        }
    }
}


