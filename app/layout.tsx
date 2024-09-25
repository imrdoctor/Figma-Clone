import { Work_Sans } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import Room from "./Room";
export const metadata = {
  title: "Figma Clone",
  description:
    "A minimalist Figma clone using fabric.js and Liveblocks for realtime collaboration",
};
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <head>
      <meta property='og:title' content='Figma Clone' />
      <meta property='og:title' content='Figma Clone' />
      <meta
        property='og:description'
        content='A powerful, minimalist Figma clone built with Liveblocks for real-time collaboration, fabric.js for canvas manipulation, and modern UI components from Radix UI.'
      />
      <meta
        property='og:image'
        content='https://cdn.discordapp.com/attachments/1288225692156297276/1288299812134846584/icons8-logo-figma-100.png?ex=66f4ae32&is=66f35cb2&hm=f12a57cc24dccc667ad5cfbb7d6498112b29c9348a0d6a9d287fa1066c2ed625&'
      />
      <meta property='og:url' content='https://figma-clone-red.vercel.app/' />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      <meta property='og:site_name' content='Figma Clone' />

      {/* Twitter Card Meta Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content='Figma Clone' />
      <meta
        name='twitter:description'
        content='A powerful, minimalist Figma clone built with Liveblocks for real-time collaboration, fabric.js for canvas manipulation, and modern UI components from Radix UI.'
      />
      <meta
        name='twitter:image'
        content='https://cdn.discordapp.com/attachments/1288225692156297276/1288299812134846584/icons8-logo-figma-100.png?ex=66f4ae32&is=66f35cb2&hm=f12a57cc24dccc667ad5cfbb7d6498112b29c9348a0d6a9d287fa1066c2ed625&'
      />
    </head>
    <body className={`${workSans.className} bg-primary-grey-200`}>
      <Room>
        <TooltipProvider>{children}</TooltipProvider>
      </Room>
    </body>
  </html>
);

export default RootLayout;
