import { Burgers } from './Burgers/Burgers';
import { Hero } from './Hero/Hero';
import { Ingredients } from './Ingredients/Ingredients';
import { Layout } from './Layout/Layout';
import { Location } from './Location/Location';
import { Story } from './Story/Story';

export const App = () => {
  return (
    <Layout>
      <Hero />
      <Ingredients />
      <Story />
      <Burgers />
      <Location />
    </Layout>
  );
};
