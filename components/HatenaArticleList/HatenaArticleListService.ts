import HatenaArticleListRepository from "./HetanaArticleListRepository";

interface entryData{
  entry: any,
  next_url: string,
  err?: Error
}

export default class HatenaArticleListService {
    repository: HatenaArticleListRepository;



    constructor() {
        this.repository = new HatenaArticleListRepository();
    }


    getEntry(){
      const data = this.repository.getArticle();
      return data;
    }
}
