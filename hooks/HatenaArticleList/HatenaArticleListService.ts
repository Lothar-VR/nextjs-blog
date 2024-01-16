import { AxiosResponse } from "axios";
import HatenaArticleListRepository from "./HetanaArticleListRepository";

export default class HatenaArticleListService {
    repository: HatenaArticleListRepository;



    constructor() {
        this.repository = new HatenaArticleListRepository();
    }


    getEntry = async() => {
      try{
        const data = await this.repository.getArticle();
        console.log("hatenaArticleListService");
        return data;
      } catch(e) {
        console.log(e);
        console.log(`Error from HatenaArticleListService`);
      }
      
    }
}
