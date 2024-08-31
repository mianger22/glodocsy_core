function CardLink({title_card, click_handler}) {  
    return (
        <div className="uk-margin uk-card uk-card-primary uk-card-body" onClick={click_handler} style={{cursor: "pointer"}}>
            <h3 className="uk-card-title">{title_card}</h3>
        </div>
    );
}

export default CardLink;