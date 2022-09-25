import { useState } from 'react'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { requestNodesFromServerActionCreator } from '../../redux/action/actionCreators'
import { fieldEnum, typesEnum } from "../../const";
import './filter.css'

export function Filter() {

    const dispatch = useDispatch()
    const [field, setField] = useState(fieldEnum.NONE)
    const [type, setType] = useState(typesEnum.NONE)
    const [value, setValue] = useState('')

    const onClick = useCallback(() => {
        dispatch(requestNodesFromServerActionCreator(1, field, type, value))
    }, [dispatch, field, type, value])

    return (
        <div className='filter'>
            <div className='selector'>
                <p>Колонка: </p>
                <select value={field} onChange={e => setField(e.target.value)}>
                    <option value={fieldEnum.NONE}>Без фильтра</option>
                    <option value={fieldEnum.TITLE}>Название</option>
                    <option value={fieldEnum.COUNT}>Количество</option>
                    <option value={fieldEnum.LEIGHT}>Длина</option>
                </select>
            </div>

            <div className='selector'>
                <p>Условие: </p>
                <select value={type} onChange={e => setType(e.target.value)}>
                    <option value={typesEnum.NONE}>Без фильтра</option>
                    <option value={typesEnum.BIGGER}>Больше</option>
                    <option value={typesEnum.EQUAL}>Содержит</option>
                    <option value={typesEnum.LESS}>Меньше</option>
                </select>
            </div>

            <div className='selector'>
                <p>Значение: </p>
                <input value={value} onChange={e => setValue(e.target.value)}/>
            </div>
            <div className='selector'>
                <button onClick={onClick} className='button'>Фильтровать</button>
            </div>
        </div>
    )
}