"use client";

import { useContext } from "react";
import { ContextCarrito } from "./context/contextCarrito";
import { productos } from "./data/productos";
import ProductoCard from "./components/ProductoCard";
import ResumenOrden from "./components/ResumenOrden";

export default function Home() {
  const { carrito } = useContext(ContextCarrito);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Carrito de Compras</h1>

      <ResumenOrden carrito={carrito} />

      <div className="row">
        {productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}
