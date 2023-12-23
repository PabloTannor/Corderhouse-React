import "./CartWidget.css"

const CartWidget = () => {
  const imgCarrtio = "public/cart.svg"  

  return (
    <div>
        <img className="imgCarrito" src={imgCarrtio} alt="carrito de compras" />
        <strong> 3 </strong>
    </div>
  )
}

export default CartWidget