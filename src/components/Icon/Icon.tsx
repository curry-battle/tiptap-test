import styles from "./Icon.module.css";

export const Icon = ({
  onClick,
  isActive,
  disabled,
  svgIcon,
}: {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  isActive: boolean;
  disabled?: boolean;
  svgIcon: React.ReactNode;
}) => {
  return (
    // TODO: diabledを真面目に実装する
    <div
      onClick={onClick}
      data-active={isActive}
      aria-disabled={disabled}
      className={styles.icon}
    >
      {svgIcon}
    </div>
  );
};
