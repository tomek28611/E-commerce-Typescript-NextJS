import React from 'react';
import Image from "next/image";
import { urlFor } from "../sanity";

interface Props {
    product: Product
}

function Product({ product }: Props) {
  return (
    <div>
        <div>
            <Image src={product.image}
        width={100}
        height={100} alt={''} />
        </div>
    </div>
  )
}

export default Product