import BlogHeader from '@/components/BlogHeader'
import { NextPage } from 'next'

interface Props {

}

const check: NextPage<Props> = () => {
    return (
        <div>
            <BlogHeader />
        </div>
        
    )
}

export default check
