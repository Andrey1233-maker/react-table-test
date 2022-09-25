import { useSelector } from 'react-redux'
import { paginationFromTableSelector } from '../../redux/selectors'
import arrow from './arrow.png'
import './pagination.css'

export function Pagination() {

    const { pageCurrent, pageCount } = useSelector(paginationFromTableSelector)

    const pageListCreator = () => {
        const pages = []
        for(let i = 1; i <= pageCount; ++i) {
            pages.push((pageCurrent === i) ? (<div className='page_active page'>{i}</div>) : (<div className='page'>{i}</div>))
        }   
        return pages
    }

    return (
        <div className='pagination'>
            <img className='arrow' src={arrow} alt="previos" />
            {pageListCreator()}
            <img className='right_arrow arrow' src={arrow} alt="next" />
        </div>
    )
}