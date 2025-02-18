import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        type="text"
        placeholder="Nome do cliente"
        className="h-8 w-[320px]"
      />
      <Input type="text" placeholder="Id do pedido" className="h-8 w-auto" />
      <Select defaultValue={"all"}>
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue placeholder="Filtre por status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"all"}>Todos</SelectItem>
          <SelectItem value={"pendent"}>Pendente</SelectItem>
          <SelectItem value={"canceled"}>Cancelado</SelectItem>
          <SelectItem value={"processing"}>Em preparo</SelectItem>
          <SelectItem value={"delivering"}>Em entrega</SelectItem>
          <SelectItem value={"delivered"}>Entregue</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant={"secondary"} size={"xs"}>
        <Search className="w-4 h4 mr-2" />
        Filtrar resultados
      </Button>
      <Button type="button" variant={"outline"} size={"xs"}>
        <X className="w-4 h4 mr-2" />
        Remover filtros
      </Button>
    </form>
  );
}
