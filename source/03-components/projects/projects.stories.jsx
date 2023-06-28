import parse from 'html-react-parser';

import twigTemplate from './projects.twig';
import data from './projects.yml';

const settings = {
  title: 'Components/Projects'
};

const Projects = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Projects.args = { ...data };

export default settings;
export { Projects };
