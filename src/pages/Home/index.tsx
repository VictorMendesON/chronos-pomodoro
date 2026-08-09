import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iusto
          numquam similique. Voluptas commodi tempora eum, nulla doloribus ab
          adipisci vel quaerat maiores ullam molestiae unde non quidem rem
          distinctio.
        </p>
      </Container>
    </MainTemplate>
  );
}
