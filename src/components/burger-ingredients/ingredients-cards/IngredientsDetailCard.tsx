
const IngredientsDetailCard = (props: { singleIngredient: any; }) => {
    const singleIngredient = props.singleIngredient;
    
    return(
        <section>
            <h1 className="text text_type_main-medium">Детали ингредиента</h1>
            <img className="pl-6 pr-6 pt-6" src={singleIngredient.image} alt={singleIngredient.name} />
            <h2 className="pt-4 text text_type_main-medium">{singleIngredient.name}</h2>
            <section className="pt-8 pb-15 ingredient-info">
                <div>
                    <p className="text text_type_main-small">Калории, ккал</p>
                    <p className="text text_type_digits-default">{singleIngredient.calories}</p>
                </div>
                <div>
                    <p className="text text_type_main-small">Белки, г</p>
                    <p className="text text_type_digits-default">{singleIngredient.proteins}</p>
                </div>
                <div>
                    <p className="text text_type_main-small">Жиры, г</p>
                    <p className="text text_type_digits-default">{singleIngredient.fat}</p>
                </div>
                <div>
                    <p className="text text_type_main-small">Углеводы, г</p>
                    <p className="text text_type_digits-default">{singleIngredient.carbohydrates}</p>
                </div>
            </section>
        </section>
    )
}

export default IngredientsDetailCard;