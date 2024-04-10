import { PropsWithChildren } from 'react';

export interface CarouselIndicatorButtonsContainerProps extends PropsWithChildren {}

function IndicatorButtonsContainer({
  children,
}: CarouselIndicatorButtonsContainerProps) {
  return (
    <div className="flex justify-center w-full py-2 gap-2">{children}</div>
  );
}

export default IndicatorButtonsContainer;
