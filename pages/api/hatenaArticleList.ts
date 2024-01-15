import HatenaArticleListController from '@/api/HatenaArticleList/HatenaArticleListController'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function hatenaArticleList(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const hatenaArticleListController = new HatenaArticleListController();

        // HatenaArticleListControllerの非同期メソッドを実行
        const responseData = await hatenaArticleListController.getArticle();

        // JSON形式でレスポンスを返す
        res.status(200).json(responseData);
        } catch (error) {
        console.error('Error in API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}