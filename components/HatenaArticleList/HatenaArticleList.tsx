import HatenaArticleListService from "./HatenaArticleListService";
import HatenaArticleListRepository from "./HetanaArticleListRepository";

export default class HatenaArticleListController {
    repository: HatenaArticleListRepository;
    service: HatenaArticleListService;

    constructor() {
        this.service = new HatenaArticleListService();
        this.repository = new HatenaArticleListRepository();
    }

    getArticle = async() => {
        const data = this.service.getEntry();
        return data;
    }
}