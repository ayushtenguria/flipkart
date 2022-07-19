import ProductCard from "./ProductCard";
// import product from './productData.js'
// import {createClient} from "next-sanity";


// function createCard({data}){
//   console.log(data);
//   return(
//       <ProductCard
//          img={product.images}
//          title={product.title}
//          description={product.description}
//          price={product.price}
//       />
//   )
// }


function ProductSpace(){
  // console.log(data);
   return(
       <div className="productSpace">
           <ProductCard
        img="https://images.unsplash.com/photo-1612077330269-788066d5ba58?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
        title="Tie Up Boots"
        description="Fall Favorite • Boots"
        price="45.00"
      />

      <ProductCard
        img="https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
        title="Plush Sweater"
        description="Sweater Season • Cozy"
        price="29.95"
      />
      <ProductCard
        img="https://images.unsplash.com/photo-1475178626620-a4d074967452?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
        title="Slim-Fit Demin"
        description="Demin • Verstile"
        price="24.99"
      />
      <ProductCard
        img="https://images.unsplash.com/photo-1569235080412-01b4eefa5fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        title="White Blouse"
        description="Blouse • Lacey"
        price="19.95"
      />
      {/* {product.map(createCard)} */}
       </div>
   )
}

export default ProductSpace;



// export async function getServerSideProps(context){
//   const client = createClient({
//     projectId: 'izyxn71b', 
//     dataset: 'product', 
//     useCdn: true 
//   });

//   const query = '*[]';
//   const data = await client.fetch(query);
  
//   return{
//     props: {
//      data
//     }
//   };
// }