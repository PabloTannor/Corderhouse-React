import './ItemDetail.css'

const ItemDetail = ({id,titulo,imagen,precio}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {titulo}</h2>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente accusamus magni ratione aut blanditiis error amet voluptate quibusdam. Reiciendis, blanditiis sint maiores atque ipsa necessitatibus eveniet fuga cum ullam?</p>
        <img src={imagen} alt={titulo} />
    </div>
  )
}

export default ItemDetail