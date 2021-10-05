export function Numbers(props) {
    const {numbers, title} = props;

    return <div className="section">
        <h3>{title}</h3>
        {numbers.map((n, i) => <div className="card" key={i}>{n}</div>)}
    </div>;
}