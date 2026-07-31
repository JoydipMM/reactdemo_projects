import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
    <h1>Page</h1>
    <div className="flex gap-x-2">
      <Button size="lg">Button</Button>
      <Button size="lg" variant="outline">Button</Button>
    </div>
    </>
  );
}
