import { PropsWithChildren } from 'react';

export interface CarouselContainerProps extends PropsWithChildren {}

function Container({ children }: CarouselContainerProps) {
  return (
    <section className="flex flex-col items-center h-screen justify-center gap-16">
      {children}
    </section>
  );
}

export default Container;
