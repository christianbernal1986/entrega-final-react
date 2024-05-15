const ItemDetail = ({producto}) => {

    return (
        <div>
            <img src={producto.imagen} alt="" />
            
            <div>

            <p>{producto.nombre}</p>
            <p>{producto.descripcion}</p>
            <p>Precio:{producto.precio}</p>

            </div>

        </div>

    );
};
export default ItemDetail