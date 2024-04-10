import { PropsWithChildren } from 'react';

export interface CarouselItemsProps extends PropsWithChildren {
  index: number;
}

function Items({ children, index }: CarouselItemsProps) {
  return (
    <div className="carousel-item" id={`item${index}`}>
      {children}
    </div>
  );
}

export default Items;
