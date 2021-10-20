import cn from 'classnames'
import { FC, useState } from 'react'
import style from './ProductView.module.css'
import { Button, Container } from '@components/ui'
import Image from "next/image"
import { Product } from '@common/types/product'
import { ProductSlider, Swatch  } from "@components/product"
// import { Choices, getVariant } from '../helpers'
// import { useUI } from '@components/ui/context'
// import useAddItem from "@framework/cart/use-add-item"
// Swatch

interface Props {
  product: Product
}

type AvailableChoices = "color" | "size" | string

type Choices = {
  [P in AvailableChoices]: string
}

const ProductView: FC<Props> = ({ product }) => {
  const [ choices, setChoices ] = useState<Choices>({})

  console.log(choices)
  // const [ isLoading, setIsLoading ] = useState(false)

  // const { openSidebar } = useUI()
  // const addItem = useAddItem()

  // const variant = getVariant(product, choices)

  // const addToCart = async () => {
  //   try {
  //     const item = {
  //       productId: String(product.id),
  //       variantId: String(variant ? variant.id : product.variants[0].id),
  //       quantity: 1
  //     }

  //     setIsLoading(true)
  //     await addItem(item)
  //     setIsLoading(false)
  //     openSidebar()
  //   } catch {
  //     setIsLoading(false)
  //   }
  // }

  return (
    <Container>
      <div className={cn(style.root, 'fit', "mb-5")}>
        <div className={cn(style.productDisplay, 'fit')}>
          <div className={style.nameBox}>
            <h1 className={style.name}>
              {product.name}
            </h1>
            <div className={style.price}>
              {product.price.value}

              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            { product.images.map(image =>
              <div key={image.url} className={style.imageContainer}>
                <Image
                  className={style.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            )}
          </ProductSlider>
          
        </div>
        <div className={style.sidebar}>
          
          <section>

            {
              product.options.map(option => 
                
            
            
              <div key={product.id} className="pb-4">
                <h2 className="uppercase font-medium">{option.displayName}</h2>
                <div className="flex flex-row py-4">
                  {
                    option.values.map(optValue => 
                      <Swatch 
                      key={`${option.id}-${optValue.label}`} 
                      label={optValue.label}
                      color={optValue.hexColor}
                      variant={option.displayName}
                      onClick={() => {
                        setChoices({
                          ...choices,
                          [option.displayName.toLowerCase()]: optValue.label.toLowerCase()
                        })
                        
                      }}
                      />
                      
                      )
                  }
                </div>
              </div>
            )
            }
            <div className="pb-14 break-words w-full max-w-xl text-lg">
              { product.description }
            </div>
          </section>
          <div>
            <Button
              className={style.button}
              onClick={() => alert("adding to cart")}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView