import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>404 - Pagina nao encontrada</Heading>
          <p>
            Opa! Parece que a pagina que voce esta tentando acessar nao existe.
          </p>
          <p>
            Volte para a <a href='/'>pagina principal</a> ou use o menu para
            navegar pelo app.
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
