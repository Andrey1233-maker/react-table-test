import './row.css'

export function Row(props) {

    const { node, isHeader } = props

    return (
        <div className={(isHeader ? "row_header" : "row")}>
            <div className="cell">{node.title}</div>
            <div className="cell">{node.count}</div>
            <div className="cell">{node.leight}</div>
            <div className="cell">{node.date}</div>
        </div>
    )
}