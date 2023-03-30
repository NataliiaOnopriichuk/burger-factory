import { Ingredients } from './Ingredients/Ingredients';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <Layout>
      <Ingredients />

      <Section id="Story" title="The story">
        2
      </Section>
      <Section id="Burgers" title="Burgers">
        3
      </Section>
      <Section id="Location" title="Location">
        4
      </Section>
      {/* <section id="Ingridient">1</section>
      <section id="Story">2</section>
      <section id="Burgers">3</section>
      <section id="Location">4</section> */}
    </Layout>
  );
};
