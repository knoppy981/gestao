import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Tab1Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tab 1</CardTitle>
        <CardDescription>Conteúdo placeholder da primeira aba.</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Em breve.
      </CardContent>
    </Card>
  );
}
