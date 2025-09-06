import React from 'react';
import { cn } from '@/lib/utils';

const GridRow = ({children, gridcol="grid-cols-1", className}) => {
  return (
    <>
      <section className={cn('grid gap-4', gridcol, className)}>
        {children}
      </section>
    </>
  )
}

export default GridRow;