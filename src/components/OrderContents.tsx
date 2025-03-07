import { formatCurrency } from "../helpers"
import { OrderID, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    remove: (id: OrderID) => void
}

export default function OrderContents( {order, remove}: OrderContentsProps) {
  return (
    <div>
        <h2 className=" font-bold text-4xl">Consumo</h2>

        <div className=" space-y-3 mt-5">
            {(order.map(item => (
                <div key={item.id}
                     className=" flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                    <div>
                        <p>
                            {item.name} - { formatCurrency(item.price)}
                        </p>
                        <p className=" font-bold">
                            Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                        </p>
                    </div>
                    <button className=" bg-red-600 h-8 w-8 rounded-full text-white font-black"
                            onClick={ () => remove(item.id)}>
                        X
                    </button>
                </div>
            )))}
        </div>
    </div>
  )
}
