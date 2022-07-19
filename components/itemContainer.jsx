import Item from "./item";

function ItemContainer(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 ">
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    )
}

export default ItemContainer;