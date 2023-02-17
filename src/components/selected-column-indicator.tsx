type SelectedColumnIndicatorProps = {
  selectedShadeIndex: number;
  index: number;
};

export function SelectedColumnIndicator({ selectedShadeIndex, index }: SelectedColumnIndicatorProps) {
  const isSelected = selectedShadeIndex === index;

  if (!isSelected) return null;

  return <span className="z-10 absolute h-[5px] -top-[8px] w-full bg-gray-600 rounded-full shadow-sm" />
}