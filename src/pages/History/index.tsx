import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';

export function History() {
  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <DefaultButton icon={<TrashIcon />} color='red' />
          </span>
        </Heading>
      </Container>

      <Container>
        <div className='responsiveTable'>erferferf</div>
      </Container>
    </MainTemplate>
  );
}
