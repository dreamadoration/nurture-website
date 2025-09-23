import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// import QRCode from "qrcode.react"

export function Payment() {
  return (
    <DialogContent className="sm:max-w-md bg-[#fff]">
      <DialogHeader>
        <DialogTitle className="text-lg font-semibold">Scan to Pay</DialogTitle>
      </DialogHeader>

      <div className="flex justify-center py-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/MM_QRcode.png" />
      </div>

      <div className="text-center text-sm text-gray-600">
        Use any UPI app to scan & pay
      </div>
    </DialogContent>
  )
}
