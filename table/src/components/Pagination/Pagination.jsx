import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestNodesFromServerActionCreator } from '../../redux/action/actionCreators'
import { tableSelector } from '../../redux/selectors'
import arrow from './arrow.png'
import './pagination.css'

export function Pagination() {

    const { pageCurrent, pageCount, field, type, value } = useSelector(tableSelector)
    const dispatch = useDispatch()

    const changePage = useCallback(pageNumber => {
        dispatch(requestNodesFromServerActionCreator(pageNumber, field, type, value))
    }, [dispatch, field, type, value])

    const pageListCreator = () => {
        const pages = []
        for(let i = 1; i <= pageCount; ++i) {
            pages.push((pageCurrent === i) ? (<div onClick={() => changePage(i)} className='page_active page'>{i}</div>) : (<div className='page'>{i}</div>))
        }   
        return pages
    }

    return (
        <div className='pagination'>
            <img onClick={() => changePage(pageCurrent - 1)} className='arrow' src={arrow} alt="previos" />
            {pageListCreator()}
            <img onClick={() => changePage(pageCurrent + 1)} className='right_arrow arrow' src={arrow} alt="next" />
        </div>
    )
}