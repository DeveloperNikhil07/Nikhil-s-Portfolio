import React, { useEffect, useState } from "react";
import styles from "./CircularProgress.module.css";

const LinearProgress = ({ skill, percentage, gradient }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = () => {
      if (current < percentage) {
        current += 1;
        setProgress(current);
        requestAnimationFrame(step);
      } else {
        setProgress(percentage);
      }
    };
    requestAnimationFrame(step);
  }, [percentage]);

  return (
    <div className={styles.circularProgress}>
      <span className={styles.skillsContent}>{skill}</span>
      <div className={styles.Progresscontainer}>
        <div
          className={styles.progressBar}
          style={{
            width: `${progress}%`,
            background: `linear-gradient(to right, ${gradient[0]}, ${gradient[1]})`,
          }}
        />
        <div className={styles.skillText}>{progress}%</div>
      </div>
    </div>
  );
};

export default LinearProgress;
