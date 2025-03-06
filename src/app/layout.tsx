import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
       <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-screen-xxl flex justify-between ">
         <div className=" px-2 sm:px-4 xxl:px-8 bg-amber-50 "><LeftBar /></div>
          <div className="flex-1 lg:min-w-[600] border-x-[1px] border-gray-100">{children}</div>
          <div className="hidden lg:flex ml-4 md:ml-8"><RightBar /></div>
       </div>
      </body>
    </html>
  );
}