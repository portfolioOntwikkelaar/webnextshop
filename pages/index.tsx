
import type { InferGetStaticPropsType } from "next"
import getAllProducts from '@framework/product/get-all-products'
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"
import { ProductCard } from "@components/product"
import { Grid, Hero, Marquee } from "@components/ui"

export async function getStaticProps() {
  const config = getConfig()

  const products = await getAllProducts(config)
  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
} 

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {
  

  
  return (
    <>
      <Grid >
      { products.slice(0, 3).map(product => 
        <ProductCard 
          key={product.id}
          product={product}  
          />

        )}
      </Grid>
      <Hero 
        headline="Lorem ipsum, ice cream"
        description="Dragée cake gummi bears tiramisu toffee oat cake bear claw caramels. Tart halvah sesame snaps tootsie roll caramels ice cream donut danish. Sesame snaps chocolate jujubes jelly gummies oat cake brownie bear claw fruitcake. Tiramisu macaroon pie cotton candy bear claw. Topping chocolate chocolate bar dessert pastry cotton candy apple pie apple pie bonbon. Toffee candy canes pudding chocolate bar apple pie. Brownie croissant oat cake croissant halvah pastry. Sweet roll jelly-o danish bear claw cheesecake pastry chocolate cake jujubes biscuit."   
      />
      <Marquee>
      { products.slice(0, 3).map(product => 
        <ProductCard 
          key={product.id}
          variant="slim"
          product={product}  
          />

        )}
      </Marquee>
    </>
  )
}

Home.Layout = Layout