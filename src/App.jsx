import { Grid2, Stack } from "@mui/material"
import { Header } from "./components/header"
import { products } from "./data/data"
import { ProductCard } from "./components/product-card/product-card"

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Grid2 container spacing={4} py={"50px"}>
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </Grid2>
      </div>
    </>
  )
}

export default App
