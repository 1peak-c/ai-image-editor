import { Crown, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export default function Upgrade() {
  return (
    <Button
      variant="outline"
      size="sm"
      className="group relative ml-2 cursor-pointer overflow-hidden border-orange-400/50 bg-linear-to-r from-orange-400/10 to-pink-500/10 text-orange-400 transition-all duration-300 hover:border-orange-500/70 hover:bg-linear-to-r hover:from-orange-500 hover:to-pink-600 hover:text-white hover:shadow-lg hover:shadow-orange-500/25"
    >
      <div className="flex items-center gap-2">
        <Crown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
        <span className="font-medium">权益升级</span>
        <Sparkles className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-md bg-linear-to-r from-orange-400/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Button>
  )
}
