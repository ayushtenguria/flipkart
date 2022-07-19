import ProductSpace from "../components/ProductSpace";
import ProductCard from "../components/ProductCard";
import { createClient} from "next-sanity";


function createCard({product}){
    return(
      <ProductCard 
     
      />
    )
  }
  

export default function Home({product},{image}) {
  console.log(product);
  return (
    <div className="hello">
      hello
      {product.map(createCard)}
      
      {/* <ProductSpace/> */}
    </div>
  )
}

export async function getServerSideProps(context){
  const client = createClient({
    projectId: 'izyxn71b', 
    dataset: 'product', 
    useCdn: false
  });
  const query = '*[_type == "product"]';
  const product = await client.fetch(query);
  return{
    props: {
      product
    }
  };
}