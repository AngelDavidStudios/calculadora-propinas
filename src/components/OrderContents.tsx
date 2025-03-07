import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
}

export default function OrderContents( {order}: OrderContentsProps) {
  return (
    <div>
        <h2 className=" font-bold text-4xl">Consumo</h2>

        <div className=" space-y-3">
            {order.length === 0 ? 
            <p className=" text-center">La orden esta vacia</p>
            : (order.map(item => (
                <div key={item.id}>
                    <p>
                        {item.name} x {item.quantity}
                    </p>
                </div>
            )))
            }
        </div>
    </div>
  )
}
