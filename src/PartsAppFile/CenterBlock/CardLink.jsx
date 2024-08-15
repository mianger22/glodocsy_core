function CardLink({title_card}) {  
    const clicked_card = () => {
        alert('Clicked')
    }

    return (
        <div class="uk-margin uk-card uk-card-primary uk-card-body" onClick={clicked_card}>
            <h3 class="uk-card-title">{title_card}</h3>
        </div>
    );
}

export default CardLink;