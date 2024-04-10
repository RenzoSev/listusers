export interface CarouselIndicatorButtonProps {
  index: number;
}

function IndicatorButton({ index }: CarouselIndicatorButtonProps) {
  return (
    <a href={`#item${index}`} className="btn btn-xs">
      {index + 1}
    </a>
  );
}

export default IndicatorButton;
