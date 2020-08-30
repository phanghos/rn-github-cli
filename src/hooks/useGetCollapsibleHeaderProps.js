import { useMovableHeader } from './useMovableHeader';

export const useGetCollapsibleHeaderProps = ({
  title,
  hasBackButton = false,
}) => {
  const { translationY, opacity, fontSize, onScroll } = useMovableHeader();
  const headerProps = {
    title,
    hasBackButton,
    translationY,
    opacity,
    fontSize,
    onScroll,
  };

  return headerProps;
};
