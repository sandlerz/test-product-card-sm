# Product Card Test

Este es un paquete de pruebas de despliegue en NPM

## Sebastian Mesa

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'test-product-card-sm
```

```
<ProductCard
  product={product}
  key={product.id}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, isMaxCountReached, increaseBy, count }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
