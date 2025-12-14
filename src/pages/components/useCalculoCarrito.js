import { useEffect, useState } from "react";

function CalculoCarrito() {

  // 🔄 Cargar carrito desde localStorage
const [carrito, setCarrito] = useState(() => {
  const data = localStorage.getItem("carrito");
  return data ? JSON.parse(data) : [];
});

useEffect(() => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}, [carrito]);

  const sumar = (id) => {
    setCarrito(
      carrito.map(item =>
        item.id === id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const restar = (id) => {
    setCarrito(
      carrito
        .map(item =>
          item.id === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter(item => item.cantidad > 0)
    );
  };

  const vaciar = () => {
    setCarrito([]);
    localStorage.removeItem("carrito");
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0
  );

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Carrito de Compras</h1>
      </section>

      <section className="content">
        <div className="card">
          <div className="card-body">
            {carrito.length === 0 ? (
              <p>El carrito está vacío</p>
            ) : (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>${item.price.toLocaleString()}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => restar(item.id)}
                        >-</button>

                        <span className="mx-2">{item.cantidad}</span>

                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => sumar(item.id)}
                        >+</button>
                      </td>
                      <td>
                        ${(item.price * item.cantidad).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="card-footer">
            <h4>Total: ${total.toLocaleString()} CLP</h4>
            <button className="btn btn-danger" onClick={vaciar}>
              Vaciar carrito
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CalculoCarrito;

