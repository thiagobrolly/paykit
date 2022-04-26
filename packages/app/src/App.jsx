import './styles/global.scss';
// import { ButtonIcon } from '@thiago_brolly/icons';
import {
  Separator,
  Button,
  Card,
  Tooltip,
  Heading,
  Modal,
  Checkbox,
  Spinner,
} from 'design-system-pl';

export function App() {
  return (
    <div>
      <h1>Hello Paylivre</h1>
      <Button appearance="approve">button</Button>
      <Separator marginBottom="50px" />
      <Card>dasdasdasdas</Card>
      <Tooltip>dasdasdasdas</Tooltip>
      <Heading>dasdasdasdas</Heading>
      <Spinner />
      <Checkbox />
      {/* <ButtonIcon /> */}
    </div>
  );
}
