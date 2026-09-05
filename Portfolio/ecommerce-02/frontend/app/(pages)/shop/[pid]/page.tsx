"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';

export default function ProductDetailsPage() {

    const params = useParams();
    const { pid } = params;
  return (
    <div className="mx-auto w-full">
      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">

        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            <div className='flex gap-3 overflow-x-auto md:flex-col md:overflow-visible'>
              <button className='shrink-0 overflow-hidden rounded-xl border-2 transition border-primary'>
                <Image src="" alt="Product Image" />
              </button>
            </div>
            <div className='relative h-96 w-full overflow-hidden rounded-xl border-2 border-primary'>
              <Image src="" alt="Product Image" fill className='object-cover' />
            </div>
          </div>
        </div>


        <div className='lg:sticky lg:top-24 lg:h-fit'>
          <p>Product ID: {pid}</p>
          <p>fgfdgfdf</p>
        </div>


      </div>












    </div>
  )
}
