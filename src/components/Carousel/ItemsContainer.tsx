import { PropsWithChildren } from 'react';

export interface CarouselItemsContainerProps extends PropsWithChildren {}

function ItemsContainer({ children }: CarouselItemsContainerProps) {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      {children}
    </div>
  );
}

export default ItemsContainer;
