import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item className="accordion-item">
            <Accordion.Item.Title
              id="experience"
              className="accordion-item-title"
            >
              We got 20 years of experience
            </Accordion.Item.Title>
            <Accordion.Item.Content
              id="experience"
              className="accordion-item-content"
            >
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are in the business of planning highy individualized
                  vacation trips for more than 20 years.
                </p>
              </article>
            </Accordion.Item.Content>
          </Accordion.Item>
          <Accordion.Item className="accordion-item">
            <Accordion.Item.Title
              id="local-guides"
              className="accordion-item-title"
            >
              We're working with local guides
            </Accordion.Item.Title>
            <Accordion.Item.Content
              id="local-guides"
              className="accordion-item-content"
            >
              <article>
                <p>We are not doing this along from our office.</p>
                <p>
                  Instead, we are working with local guides to ensure a safe and
                  pleasant vacation
                </p>
              </article>
            </Accordion.Item.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
