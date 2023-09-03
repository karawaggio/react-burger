import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const OrderInfo = () => {
    return(
        <section>
            <h1 className="text text_type_digits-large">034536</h1>
            <h2 className="pt-8 pb-5 text text_type_main-medium">идентификатор заказа</h2>
            <div className="pt-5 pb-5 modal-icon-wrap">
                <CheckMarkIcon type="primary" />
            </div>
            <p className="pt-5 pb-2 text text_type_main-default">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </section>
    )
}

export default OrderInfo;