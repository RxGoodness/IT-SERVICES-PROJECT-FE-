import AboutSolutionsStyles from './About_Solutions.module.scss';
import About from '../../pages/LandingPage/container/About/About';
import Solutions from '../../pages/LandingPage/container/Solutions/Solutions';

const AboutSolutions = () => {
  return (
    <div className={AboutSolutionsStyles.about_solutions_container}>
        <div className={AboutSolutionsStyles.about_content}>
            <About/>
        </div>
        <div className={AboutSolutionsStyles.solutions_content}>
          <Solutions/>
        </div>
    </div>
  )
}

export default AboutSolutions