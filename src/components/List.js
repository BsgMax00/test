export function ListItem(props){
    const {list} = props;
    return <ul>
        <li>{list.word}</li>
    </ul>;
}

export function ListItems(props){
    const {listItems, title} = props;

    return <div className="section">
        <h3>{title}</h3>
        {listItems.map(l => <ListItem list={l}></ListItem>)}
    </div>;
}