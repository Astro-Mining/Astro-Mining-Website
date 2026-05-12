import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import styles from "@/components/shared/ButtonLink.module.css";

export default function ButtonLink({ href, children, variant = "solid" }) {
  return (
    <a
      className={clsx(styles.button, {
        [styles.solid]: variant === "solid",
        [styles.outline]: variant === "outline"
      })}
      href={href}
    >
      <span>{children}</span>
      <Icon className={styles.icon} name="arrowRight" size={16} />
    </a>
  );
}
