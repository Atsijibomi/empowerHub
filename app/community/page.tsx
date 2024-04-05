import { CommunityCards } from "@/components/community-card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Community = () => {
  return (
    <>
      <div className="group flex flex-col items-center justify-center gap-6 px-6 py-4 pt-12">
        <div className="flex w-auto  justify-center text-4xl font-semibold tracking-tight">
          Welcome to the{" "}
          <span className="rounded-md bg-purple-400/20"> Community </span> page
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default" size="lg">
              Get Started
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Join the community</DialogTitle>
              <DialogDescription>
                Fill in the form below to join our community
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose>
                <Button type="submit">Join now</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="md:grid-3 sm:grid-3 grid-1 mx-8 mt-8 flex flex-wrap gap-4 p-2">
        <CommunityCards title="Womens Day Celebration" />
        <CommunityCards title="Business of Conservation Conference" />
        <CommunityCards title="Gorrilla Naming Ceremony" />
        <CommunityCards title="Independence Day" />
        <CommunityCards title="Community Cleanup Day" />
      </div>
    </>
  );
};

export default Community;
