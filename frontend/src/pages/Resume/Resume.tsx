import * as Icon from "react-bootstrap-icons";
import styles from "./Resume.module.scss";
import History from "components/shared/History/History";
import useGetExperienceDataQuery from "api/dataFetchingHooks/queries/useGetExperienceDataQuery";
import useGetEducationDataQuery from "api/dataFetchingHooks/queries/useGetEducationDataQuery";
import { ProgressBar } from "react-bootstrap";
import useGetSkillsDataQuery from "api/dataFetchingHooks/queries/useGetSkillsDataQuery";

const Resume = () => {
  const { data: experience, isLoading: experienceLoading } = useGetExperienceDataQuery();
  const { data: education, isLoading: educationLoading } = useGetEducationDataQuery();
  const { data: skills, isLoading: skillsLoading } = useGetSkillsDataQuery();

  return (
    <div className={styles.resume}>
      <h1>Resume</h1>
      {experienceLoading && <div>Loading...</div>}
      {experience?.length && (
        <History Heading='Experience' icon={<Icon.Briefcase />} list={experience} />
      )}

      {educationLoading && <div>Loading...</div>}
      {education?.length && <History Heading='Education' icon={<Icon.Book />} list={education} />}

      {skillsLoading && <div>Loading...</div>}
      {skills?.length && (
        <div className={styles.skills}>
          <h2>
            {" "}
            <Icon.Lightbulb /> Skills
          </h2>
          <div className={styles.skillBox}>
            {skills?.map((skill) => (
              <div key={skill._id} className='progress-bar-wrapper'>
                <span>{skill.skill}</span>
                <ProgressBar animated label={`${skill.percentage}%`} now={skill.percentage} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
