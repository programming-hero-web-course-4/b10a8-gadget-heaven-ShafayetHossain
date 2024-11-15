import { Link, useLoaderData, useParams } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const productData = useLoaderData();
  const { productId } = useParams();
  const detailProduct = productData.find(
    (element) => element.product_id == productId
  );
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = detailProduct;

  const handleAddCard = (product,cards) => {

    const islocalStorage = localStorage.getItem(cards);
    if(!islocalStorage)
    {
      localStorage.setItem(cards,JSON.stringify([product]));
      toast.success('Card Added Successfuly!');
      
    }

    else
    {
      const remainLocalStorage = JSON.parse(islocalStorage).find((data)=>data.product_id==product.product_id);

      if(!remainLocalStorage)
      {
        localStorage.setItem(cards,JSON.stringify([...JSON.parse(islocalStorage),product]));
        toast.success('Card Added Successfuly!');
        
      }
      else
      {
        toast.error('Card already exist!');
      }
     
    }



  }

 

  return (
    <div className="flex gap-x-6 bg-slate-100 rounded-xl p-4">
      <div className="flex-1 max-w-60">
        <img className="rounded-xl" src={product_image} alt="" />
      </div>

      <div className="flex flex-col justify-center text-justify gap-y-1">
        <h1 className="font-semibold text-2xl">{product_title}</h1>
        <p className="font-semibold">Price: $ {price}</p>
        {availability ? (
          <div class="badge badge-accent badge-outline">In Stock</div>
        ) : (
          <div class="badge badge-accent badge-outline">Stock Out</div>
        )}
        <p className="opacity-70">{description}</p>
        <p className="font-bold">Speciffication:</p>

        <>
          {Specification.map((element) => (
            <li className="list-decimal opacity-70">{element}</li>
          ))}
        </>
        <h2 className="font-bold">Rating:</h2>
        <div className="flex items-center gap-x-2">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <div>
            <p>{rating}</p>
          </div>
        </div>
        <div>
            <button
              onClick={()=>handleAddCard(detailProduct,'cards')}
              className={`badge px-5 py-3 hover:bg-[#9538E2] hover:text-white text-black font-bold outline outline-1 outline-purple-300`}
            >
              Add To Card
              <BsCart4 className="font-bold text-lg ml-2" />
            </button>
          <FaRegHeart
            onClick={()=>handleAddCard(detailProduct,'wishlist')}
            className={`badge hover:bg-[#9538E2] hover:text-white text-black font-bold ml-1 outline outline-1 outline-purple-300`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
