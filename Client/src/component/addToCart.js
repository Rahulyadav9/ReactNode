
import { useCounter } from "../utils/Context";
const AddToCart = ()=>{
    const { count, increment, decrement, products } = useCounter();
    const handleProduct = ()=>{
        //ViewCart();
    }
    return (
        <div className="justify-between">
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {count}
            </span>
            <img 
                className="w-6 h-6 rounded-sm"
                onClick={handleProduct}
                alt="Bags"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwfbVQ3g_XCDe-o5v3pPIZjMsTomoh2NLpnXpF5oz44ciPvWLpl_OI&usqp=CAE&s"
            />
        </div>
    )
}
export default AddToCart;