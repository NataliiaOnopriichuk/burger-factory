import { Burgers } from 'Burgers/Burgers';
import { Story } from 'Story/Story';
import { Ingredients } from './Ingredients/Ingredients';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <Layout>
      <Ingredients />
      <Story />
      <Burgers />
      <Section id="Location" title="Location">
        4
      </Section>
    </Layout>
  );
};
