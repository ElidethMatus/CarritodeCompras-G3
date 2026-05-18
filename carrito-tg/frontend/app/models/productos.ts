export interface Producto {
    id?: number;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen: string;
    isvProducto: number;
    ordenCompra: number;
}

export const productos: Producto[] = [
    {
        id: 1,
        nombre: "Laptop Gamer",
        precio: 25000,
        descripcion: "Laptop de alto rendimiento",
        imagen: "https://images.pcel.com/600/Computadoras-Laptops-Gigabyte-A16-CMHI2US893SH-555893-0gfuhiuW3ZTQdKi1.jpg",
        isvProducto: 0.15,
        ordenCompra: 1
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 800,
        descripcion: "Mouse alambrico",
        imagen: "https://plus.unsplash.com/premium_photo-1671611822374-4719df5c89bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isvProducto: 0.15,
        ordenCompra: 2
    },
    {
        id: 3,
        nombre: "Teclado Mecánico",
        precio: 1500,
        descripcion: "Teclado mecánico profesional",
        imagen: "https://imagenes.elpais.com/resizer/v2/RDAB6ENMSFFUFPKLQEEXA2FVCY.png?auth=e26cae7f65d7b0e8ac831e06b4d4e8842d8ca4880a1218d864d0fea934a20ddd&width=980",
        isvProducto: 0.15,
        ordenCompra: 3
    }
];