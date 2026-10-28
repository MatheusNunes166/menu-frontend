import { Button } from "@/components/button";
import { MapPin } from "lucide-react";
import { SpotDialog } from "./spot-dialog";
import { useState } from "react";

export function SpotButton() {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div className="flex itens-center justify-center"> 
         <Button
            className="flex cursor-pointer flex-col itens-center gap-1 rounded-2xl px-6 py-4 text-brand-foreground transition-colors hover:bg-primary hover::text-brand-foreground"
            onClick={() => setDialogOpen(true)}
         >
            <MapPin className="size-6" />
            Selecionar Mesa
         </Button>

         <SpotDialog open={dialogOpen} />
        </div>
    )
}