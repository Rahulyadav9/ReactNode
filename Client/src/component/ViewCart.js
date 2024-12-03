import { useCounter } from "../utils/Context";
const ViewCart = ()=>{

    const { count, increment, decrement, products } = useCounter();
    console.log("=============>>  ",products);
//     return (
//         <div key={products?.id} className="bg-white p-4 relative my-1 whitespace-pre-line">
//             {products?.badge?.type  && (
//                 products?.badge?.text=="Top seller" ? (
//                     <h1 className="absolute top-2 left-2 bg-rose-600 text-white text-sm font-bold py-1 px-2">
//                     {products?.badge?.text}
//                 </h1>
//                 ) :(
//                     <h1 className="absolute top-2 left-2 bg-slate-950 text-white text-sm font-bold py-1 px-2">
//                     {products?.badge?.text}
//                     </h1>
//                 ) 
//             )}
            
//             <img
//                 src={products?.mainImageUrl}
//                 alt={products?.mainImageAlt}
//                 className="w-60 h-60 object-cover rounded-md"
//             />
//             {
//                 products?.tagText &&
//                 (
//                     <h1 className="text-red-600 text-sm font-bold">
//                     {products?.tagText}
//                     </h1>
//                 ) 
//             }
//             <p className="font-medium mt-1">{products?.name}</p>
//             <div className='flex col-span-1 text-sm'>
//                 <p className="text-gray-600 flex">{products?.typeName.slice()},</p>
//                 <p className="text-gray-600 ml-1">{products?.itemMeasureReferenceText}</p>
//             </div>
//             <p className="text-lg font-bold mt-2">
//                 {products?.salesPrice?.current?.prefix} 
//                 <span className='text-3xl'>{products?.salesPrice?.current?.wholeNumber}</span>
//             </p>
//             <p className="text-yellow-500 mt-2">
//                 {products?.ratingValue} ★ ({products?.ratingCount})
//             </p>
//         </div>
//     )
 }

export default ViewCart;