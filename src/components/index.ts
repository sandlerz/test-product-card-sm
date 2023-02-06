import { ProductCard as ProductCardHOC } from './ProductCard'
import { ProductButtons } from './ProductButtons'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'
import { ProductCardHOCProps } from '../interfaces/interfaces'

export { ProductImage } from './ProductImage'
export { ProductTitle } from './ProductTitle'
export { ProductButtons } from './ProductButtons'

export type { ProductCardProps } from './ProductCard'
export type { ProductImageProps } from './ProductImage'
export type { ProductTitleProps } from './ProductTitle'
export type { ProductButtonsProps } from './ProductButtons'

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Title: ProductTitle,
  Buttons: ProductButtons,
})

export default ProductCard
