"use client"

import { checkSubscribe } from "@/actions/checkSubscribe"
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { KeyRound } from "lucide-react"
import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface Props {
  email: string
}

const Redeem: React.FC<Props> = ({ email }) => {
  const [codeEtab, setUserDatasFromEmail] = useState<any>(null)
  const [licenseKey, setLicenseKey] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (licenseKey.length === 16) {
        toast({
          title: "Success!",
          description: "Your license key has been redeemed successfully.",
          variant: "default",
        })
        setOpen(false)
        setLicenseKey("")
      } else {
        throw new Error("Invalid license key")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to redeem license key. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await checkSubscribe(email)
        setUserDatasFromEmail(data)
      } catch (error) {
        console.error("Erreur lors de la récupération des données utilisateur:", error)
      }
    }

    fetchData()
  }, [email])

  return (
    <>
      {!codeEtab && (
        <SidebarMenuItem>

          <SidebarMenuButton
            onClick={() => setOpen(true)}
            className="hover:bg-black hover:text-white dark:hover:bg-gray-800"
          >
            <KeyRound className="h-4 w-4" />
            <span>Redeem a key</span>
          </SidebarMenuButton>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
              <form onSubmit={handleSubmit}>
                <DialogHeader>
                  <DialogTitle>Redeem License Key</DialogTitle>
                  <DialogDescription>Enter your license key below to activate your product.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="license-key" className="text-right">
                      License Key
                    </Label>
                    <Input
                      id="license-key"
                      value={licenseKey}
                      onChange={(e) => setLicenseKey(e.target.value)}
                      className="col-span-3"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Redeeming..." : "Redeem Key"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </SidebarMenuItem>
      )}
    </>
  )
}

export default Redeem

