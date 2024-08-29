import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Button from './atoms/Button';
import Link from './atoms/Link';
import CallToAction from './molecules/CallToAction';
import Payconiq from './molecules/Payconiq';
import ThematicLink from './molecules/ThematicLink';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10}}>
      <Link href="#">Link</Link>
      <Button.Root>Plain button</Button.Root>
      <Button.Root>
        <Button.Icon>
          <ArrowLeftIcon />
        </Button.Icon>
        <Button.Text>Plain button with Icons</Button.Text>
        <Button.Icon>
          <ArrowRightIcon />
        </Button.Icon>
      </Button.Root>
      <CallToAction appearance="primary">Primary</CallToAction>
      <CallToAction appearance="primary" loading>
        Primary loading
      </CallToAction>
      <CallToAction appearance="primary" small loading>
        Primary loading small
      </CallToAction>
      <CallToAction appearance="primary" disabled>
        Primary disabled
      </CallToAction>
      <CallToAction appearance="secondary">
        Secondary
      </CallToAction>
      <CallToAction appearance="secondary" loading>
        Secondary loading
      </CallToAction>
      <CallToAction href="#">
        Call to action with href
      </CallToAction>
      <Payconiq />
      <ThematicLink />
    </div>
  );
}

export default App;
