import { Children } from '../../types';

export interface CarouselItemsProps extends Children {
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
