import { Children } from '../../types';

export interface CarouselIndicatorButtonsContainerProps extends Children {}

function IndicatorButtonsContainer({
  children,
}: CarouselIndicatorButtonsContainerProps) {
  return (
    <div className="flex justify-center w-full py-2 gap-2">{children}</div>
  );
}

export default IndicatorButtonsContainer;
