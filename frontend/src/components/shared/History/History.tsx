import { ReactNode } from "react";
import styles from "./History.module.scss";
import { IEducationData, IExperienceData } from "interfaces/apiInterfaces";

interface IHistrory<T> {
  Heading: string;
  icon: ReactNode;
  list: T[];
}

const History = <T extends IExperienceData | IEducationData>({
  Heading,
  icon,
  list,
}: IHistrory<T>) => {
  return (
    <div className={styles.history}>
      <h2>
        {icon} {Heading}
      </h2>
      <div className={styles.list}>
        {list?.map((item) => {
          const experience = item as IExperienceData;
          const education = item as IEducationData;
          return (
            <article key={item._id} className={styles.listItem}>
              {experience?.designation && <h5>{experience?.designation}</h5>}
              {experience?.company && <strong>{experience?.company}</strong>}
              {experience?.location && <em>{experience?.location}</em>}

              {education?.university && <h5>{education?.university}</h5>}
              {education?.degree && (
                <strong>
                  {education?.degree} -
                  {education?.fieldOfStudy && <span>({education?.fieldOfStudy})</span>}
                </strong>
              )}

              {(item?.startDate || item?.endDate) && (
                <p>
                  {item?.startDate} - {item?.endDate}
                </p>
              )}
              {item?.description && (
                <div
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                  className={styles.description}></div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default History;
