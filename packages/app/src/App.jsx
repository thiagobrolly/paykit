import './styles/global.scss';
import { Heading, Card } from '@thiago_brolly/testecom';
import {
  ExampleDefault,
  IconUser,
  IconArrow,
  PlOutlineWallet,
  PlOutlineAppstore,
  PlOutlineArrowDown,
} from '@thiago_brolly/ui-icons-b';

export function App() {
  return (
    <div>
      <h1>Components</h1>
      <Heading bold>Title 1</Heading>
      <Card title="Title" subTitle="Sub-Title">
        Card
      </Card>
      <ExampleDefault size={100} color="green" />
      <IconUser size={100} color="green" />
      <IconArrow size={100} color="green" />
      <PlOutlineWallet color="green" />
      <PlOutlineAppstore color="green" />
      <PlOutlineArrowDown color="green" />
    </div>
  );
}
