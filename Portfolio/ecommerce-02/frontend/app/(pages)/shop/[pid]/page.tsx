"use client";
import ProductDetails from '@/app/features/product/components/ProductDetails';
import { useParams } from 'next/navigation';

export default function ProductDetailsPage() {

    const params = useParams<{ pid: string }>();
    const productDetails = {
      pid: params.pid
    };

  return (
    <>
    <ProductDetails productDetails={productDetails} />
    </>
  )
}
