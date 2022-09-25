import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fieldEnum, typesEnum } from "../../const";
import { requestNodesFromServerActionCreator } from "../../redux/action/actionCreators";
import { nodesFromTableSelector } from "../../redux/selectors";
import { Row } from '../Row/Row';

import './table.css';

export function Table() {

    const nodes = useSelector(nodesFromTableSelector);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestNodesFromServerActionCreator(1, fieldEnum.NONE, typesEnum.NONE, ''))
    }, [dispatch])

    return (
        <div className="table">
            <Row node={{title: 'Название', count: 'Количество', leight: 'Длина', date: 'Дата'}} isHeader={true}/>
            {nodes.map(node => (
                <Row node={node}/>
            ))}
            <Row node={{title: '...', count: '...', leight: '...', date: '...'}}/>
        </div>
    );
}