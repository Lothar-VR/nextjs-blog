import { AxiosResponse } from "axios";
import HatenaArticleListRepository from "./HetanaArticleListRepository";
import xml2js from "xml2js";

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

    getEntry = async() => {
      let url = process.env.HATENA_URL;
      // 記事を格納する配列
      let item_list: { day: any; title: any; href: any; }[] = [];

      // 下書き以外の記事が10件溜まるまで記事一覧を取得する
      while (item_list.length < 10) {
        if(url !== undefined){
          const { entry, next_url }  = await this.getArticle(url); // APIを叩いて記事一覧のXMLを取得する。

          this.insertItems(entry, item_list); // item_listに下書き以外の記事一覧を格納する。

          url = next_url;
        }
      }
      return item_list;
    }

    getArticle = async(url: string) : Promise<entryData>=> {
      const response: AxiosResponse<string> =  await this.repository.getArticle(url);
      const data = response.data;
      return await this.xmlToJson(data);
      

    }

    // 受け取ったデータをJSON配列に変換
    xmlToJson = async(data: string): Promise<entryData> => {
      return new Promise((resolve, reject) => {
        xml2js.parseString(data, (err, result) => {
          if (err) {
            reject(err);
          } else {
            const entry = result.feed.entry;
            const next_url = result.feed.link[1].$.href;
            resolve({ entry, next_url });
          }
        });
      });
    }

    // 下書きを除く記事を配列に追加する。
    insertItems = (entry: any, item_list: { day: any; title: any; href: any; }[])  => {
      for (let e of entry) {
        if (e["app:control"][0]["app:draft"][0] == "yes") {
          // 下書き記事をスキップする。
          continue;
        }

        // はてな記事のJSONを生成。
        const item = {
          day: e.published.toString(),
          title: e.title.toString(),
          href: e.link[1].$.href
        }
        item_list.push(item);
      }
    };
}
