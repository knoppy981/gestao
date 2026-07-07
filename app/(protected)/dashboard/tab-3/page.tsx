import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Tab3Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tab 3</CardTitle>
        <CardDescription>Conteúdo placeholder da terceira aba.</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Em breve.
      </CardContent>
    </Card>
  );
}
