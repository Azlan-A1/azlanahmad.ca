import { BookOpenIcon, MicroscopeIcon } from 'lucide-react';

/*import ExperienceButton from '@/components/buttons/ExperienceButton';
import snowflakeLogo from '../../public/img/logos/snowflake-logo.png';
import ibmLogo from '../../public/img/logos/ibm-logo.png';
import uhnLogo from '../../public/img/logos/uhn-logo.png';
import tdLogo from '../../public/img/logos/td-logo.png';
*/

import uoftLogo from '../../public/img/logos/uoft-logo.png';
import uwoLogo from '../../public/img/logos/uwo-logo.png';
import dartmouthLogo from '../../public/img/logos/dartmouth-logo.png';
import mitLogo from '../../public/img/logos/mit-logo.png';
import brucepowerLogo from '../../public/img/logos/brucepower-logo.png';
export const EXPERIENCES = [
  {
    id: 'snowflake',
    company: 'Bruce Power',
    role: 'Data Science Intern',
    date: 'September 2024 - Present',
    location: 'Tiverton, ON',
    points: ['Developed front-end applications using Dash and Streamlit to create interactive dashboards, enabling real-time data visualization and driving key insights for stakeholders, resulting in a 20% increase in decision-making.',
      ' Leveraged Generative AI frameworks such as LangChain and LlamaIndex to build innovative AI applications, leading to a 25% increase in the generation of automated responses and solutions.'
    ],
    icon: brucepowerLogo,
    buttons: [],
  },
  {
    id: 'ibm',
    company: 'Massachusettes Institute of Technology',
    role: 'Data Engineering Intern',
    date: 'May 2024 - August 2024',
    location: 'Cambridge, MA',
    points: [
      "Developed web apps with real-time data integration using <strong>JavaScript</strong>, Node.js, and REST APIs, providing users with accurate and up-to-date visual insights, improving user engagement by 30%.",
      'Designed and implemented user-centric visualizations by applying principles of typography, chart forms, and color theory, resulting in a 40% increase in user satisfaction as measured by survey feedback',
    ],
    icon: mitLogo,
    buttons: [],
  },
  {
    id: 'uhn',
    company: 'Dartmouth College',
    role: 'Data Engineering and Business Intelligence Intern',
    date: 'May 2024 - August 2024',
    location: 'Hanover, NH',
    points: [
      "Achieved high data processing efficiency, as measured by reducing ETL processing time by 30%, by designing and developing batch and real-time data pipelines using Java and Apache Spark",
      "Facilitated a seamless transition to cloud infrastructure, as measured by a 50% reduction in on-premises infrastructure costs, by shifting data storage and processing to GCP tools such as BigQuery and Dataflow",
    ],
    icon: dartmouthLogo,
    buttons: [
    ],
  },
  {
    id: 'td',
    company: 'University of Toronto',
    role: 'Machine Learning Intern',
    date: 'January 2024 - Aug 2023',
    location: 'Toronto, ON',
    points: [
      'Developed neural network models to analyze and predict sleep patterns using data from wearable devices and mobile health applications, resulting in a 25% improvement in sleep detection accuracy.',
      'Conducted a comparative analysis of SVM, Random Forest, and CNN for sleep stage classification, achieving a 92% accuracy with CNN. This resulted in a 15% performance improvement over the baseline',
      'Created Tableau and Power BI dashboards, improving decision-making and reducing reporting time by 20%',
    ],
    icon: uoftLogo,
    buttons: [],
  },
  {
    id: 'uoft',
    company: 'University of Western Ontario',
    role: 'Data Science Intern',
    date: 'May 2023 - Apr 2024',
    location: 'London, ON',
    points: [
      "Developed a Generative Adversarial Networks model using Tensorflow and PyTorch to generate detailed mages of MRI Scans gathered from experimental data with an accuracy rate of 85%.",
      "Optimized the performance of a multi-terabyte research database, which reduces the data retrieval time by approximately 40%, by administering frequent checks and updates on SQL and NoSQL systems."

    ],
    icon: uwoLogo,
    buttons: [
    ],
  },
];
