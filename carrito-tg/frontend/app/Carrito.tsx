'use client'

import { useContext } from "react";
import { ContextCarrito } from "./context/contextCarrito";

export default function Carrito() {

    const { carrito, eliminarProducto, subtotal, totalISV, totalPagar } = useContext(ContextCarrito);

    return (
        <div>
            <h2>Mi Carrito</h2>

            {carrito.length === 0 && <p>El carrito está vacío</p>}

            {carrito.map((producto, index) => (
                <div key={index}>
                    <p>{producto.nombre} - L. {producto.precio}</p>
                    <button onClick={() => eliminarProducto(producto.id)}>
                        Eliminar
                    </button>
                </div>
            ))}

            <p>Subtotal: L. {subtotal}</p>
            <p>ISV: L. {totalISV}</p>
            <p>Total: L. {totalPagar}</p>
        </div>
    );
}