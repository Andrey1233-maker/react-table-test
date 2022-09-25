import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unsetErrorActionCreator } from "../../redux/action/actionCreators";
import { errorFromTableSelector } from "../../redux/selectors";

import './errorBox.css';

export function ErrorBox() {

    const error = useSelector(errorFromTableSelector)
    const dispatch = useDispatch()

    const onClick = useCallback(() => {
        dispatch(unsetErrorActionCreator())
    }, [dispatch])

    if(error) {
        return (
            <div className="error_box">
                <p className="error_box__text">{error}</p>
                <button className="error_box__btn" onClick={onClick}>Понятно</button>
            </div>
        )
    }

    return (<></>)
}