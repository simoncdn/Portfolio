import styles from "../../style"

export default function ProjectsButton({label, lien}) {
  return (
    <div className={`relative `}>
      <div
        className={`${styles.gradientBtnBg}
        bg-white opacity-30
          group-hover:opacity-100
          group-hover:animate-pulse
          group-hover:bg-gradient-to-r from-linearLeft to-linearRight`}></div>
      <a href={lien} target="_blank">
        <button
          className={`${styles.gradientBtn}`}>
          {label}
        </button>
      </a>
    </div>
  );
}
