import { Children } from '../../types';

export interface CarouselItemsContainerProps extends Children {}

function ItemsContainer({ children }: CarouselItemsContainerProps) {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      {children}
    </div>
  );
}

export default ItemsContainer;
