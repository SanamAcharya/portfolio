import { create } from 'zustand';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiGithub, SiDribbble, SiBehance } from "react-icons/si";
import CopyButton from "./CopyButton";

interface ContactDialogStore {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

const useContactDialogStore = create<ContactDialogStore>((set) => ({
  isOpen: false,
  openDialog: () => set({ isOpen: true }),
  closeDialog: () => set({ isOpen: false }),
}));

export const useContactDialog = () => {
  const { isOpen, openDialog, closeDialog } = useContactDialogStore();
  return {
    isOpen,
    openContactDialog: openDialog,
    closeContactDialog: closeDialog,
  };
};

export default function ContactDialog() {
  const { isOpen, closeContactDialog } = useContactDialog();

  return (
    <Dialog open={isOpen} onOpenChange={closeContactDialog}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Information</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <span>hello@example.com</span>
              <CopyButton text="hello@example.com" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>+1 (234) 567-890</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>San Francisco, CA</span>
          </div>

          <div className="flex gap-4 pt-4 border-t">
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <SiGithub className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                <SiDribbble className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                <SiBehance className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
