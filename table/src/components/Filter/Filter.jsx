import './filter.css'

export function Filter() {

    return (
        <div className='filter'>
            <div className='selector'>
                <p>Колонка: </p>
                <select>
                    <option>Название</option>
                    <option>Количество</option>
                    <option>Длина</option>
                </select>
            </div>

            <div className='selector'>
                <p>Условие: </p>
                <select>
                    <option>Больше</option>
                    <option>Содержит</option>
                    <option>Меньше</option>
                </select>
            </div>

            <div className='selector'>
                <p>Значение: </p>
                <input />
            </div>
            <div className='selector'>
                <button className='button'>Фильтровать</button>
            </div>
        </div>
    )
}