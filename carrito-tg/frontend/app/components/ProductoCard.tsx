"use client";

import { Producto } from "../models/productos";
import BotonAgregar from "./BotonAgregar";

export default function ProductoCard({ producto }: { producto: Producto }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.descripcion}</p>
          <p>
            <strong>Precio:</strong> L. {producto.precio.toFixed(2)}
          </p>
          <p>
            <strong>ISV:</strong> L. {producto.isvProducto.toFixed(2)}
          </p>
          <BotonAgregar producto={producto} />
        </div>
      </div>
    </div>
  );
}
