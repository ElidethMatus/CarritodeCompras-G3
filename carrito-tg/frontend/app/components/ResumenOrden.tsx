"use client";

import { useMemo } from "react";
import { Producto } from "../models/productos";

interface ResumenOrdenProps {
  carrito: Producto[];
}

export default function ResumenOrden({ carrito }: ResumenOrdenProps) {
  const carritoAgrupado = useMemo(
    () =>
      carrito.reduce((acc, producto) => {
        const orden = producto.ordenCompra || 0;
        if (!acc[orden]) {
          acc[orden] = { productos: [], subtotal: 0, totalISV: 0 };
        }
        acc[orden].productos.push(producto);
        acc[orden].subtotal += producto.precio;
        acc[orden].totalISV += producto.isvProducto;
        return acc;
      }, {} as Record<number, { productos: Producto[]; subtotal: number; totalISV: number }>),
    [carrito]
  );

  if (carrito.length === 0) {
    return (
      <div className="card mb-5 shadow-sm border-primary">
        <div className="card-body">
          <p className="mb-0">No tienes productos en el carrito.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card mb-5 shadow-sm border-primary">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">Resumen de tu Orden</h4>
      </div>
      <div className="card-body">
        {(Object.entries(carritoAgrupado) as [string, { productos: Producto[]; subtotal: number; totalISV: number }][]).map(
          ([orden, info]) => {
            const totalPagar = info.subtotal + info.totalISV;
            return (
              <div key={orden} className="mb-4 p-3 border rounded bg-light">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="mb-0 text-primary">Orden de Compra #{orden}</h5>
                  <span className="badge bg-secondary">{info.productos.length} items</span>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-8">
                    <ul className="list-group list-group-flush mb-3">
                      {info.productos.map((p, index) => (
                        <li
                          key={index}
                          className="list-group-item d-flex justify-content-between px-0 bg-transparent"
                        >
                          <span>{p.nombre}</span>
                          <span>L. {p.precio.toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-4 text-end">
                    <p className="mb-1">
                      <strong>Subtotal:</strong> L. {info.subtotal.toFixed(2)}
                    </p>
                    <p className="mb-1">
                      <strong>ISV:</strong> L. {info.totalISV.toFixed(2)}
                    </p>
                    <h4 className="text-success mt-2">
                      <strong>Total:</strong> L. {totalPagar.toFixed(2)}
                    </h4>
                    <button
                      className="btn btn-success w-100 mt-2 fw-bold"
                      onClick={() => alert(`¡Pagando L. ${totalPagar.toFixed(2)} de la orden #${orden}!`)}
                    >
                      Pagar Orden #{orden}
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
