import parse from 'html-react-parser';

import twigTemplate from './support.twig';
import data from './support.yml';

const settings = {
  title: 'Components/Support'
};

const Support = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Support.args = { ...data };

export default settings;
export { Support };
