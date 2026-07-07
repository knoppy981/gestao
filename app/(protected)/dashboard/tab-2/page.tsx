import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Tab2Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tab 2</CardTitle>
        <CardDescription>Conteúdo placeholder da segunda aba.</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Em breve.
      </CardContent>
    </Card>
  );
}
