import parse from 'html-react-parser';

import twigTemplate from './support-detail.twig';
import data from './support-detail.yml';
import './support-detail.scss';

const settings = {
  title: 'Components/Support Detail'
};

const SupportDetail = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
SupportDetail.args = { ...data };

export default settings;
export { SupportDetail };
