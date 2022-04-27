import './styles/global.scss';
import { Heading, Card } from '@thiago_brolly/testecom';
import { ExampleDefault } from '@thiago_brolly/icons-b';

export function App() {
  return (
    <div>
      <h1>Components</h1>
      <Heading>Title</Heading>
      <Card title="Title" subTitle="Sub-Title">
        Card
      </Card>
      <ExampleDefault size={100} color="green" />
    </div>
  );
}
