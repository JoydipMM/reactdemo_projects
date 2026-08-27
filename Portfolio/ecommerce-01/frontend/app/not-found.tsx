import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-8xl font-semibold text-neutral-950">404</p>
      <h1 className="mt-6 text-4xl font-semibold uppercase tracking-wide">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-neutral-600">The page you are looking for does not exist.</p>
      <Button className="mt-8" href="/">Back to home</Button>
    </Container>
  );
}
