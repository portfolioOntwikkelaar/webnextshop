import { ApiConfig } from "@common/types/api"
import { Product } from "@common/types/product"
import { ProductConnection } from "@framework/schema"
import getAllProductsPathsQuery from "@framework/utils/queries/get-all-products-paths"


type ReturnType = {
  products: Pick<Product, "slug">[]
}

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {

  const { data } = await config.fetch<{products: ProductConnection}>({
    query: getAllProductsPathsQuery, 
    url: config.apiUrl
  })

  // console.log(JSON.stringify(data, null, 2))

  const products = data.products.edges.map(({node: {handle}}) => {
    return {

      slug: handle
    }
  })

  console.log(products)
  return { products }

//   return {
//     products: [
//       { slug: "cool-hat"},
//       { slug: "t-shirt"},
//       { slug: "lightweight-jacket"}
//     ]
//   }
 }

export default getAllProductsPaths