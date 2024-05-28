import {type AppType} from "next/app";
import {Inter} from "next/font/google";
import "@/styles/globals.css";
import {NextUIProvider} from "@nextui-org/react";
import {Analytics} from '@vercel/analytics/react';
import { appWithTranslation } from 'next-i18next'
import ActionSheetButtons from "@/components/action-sheet-buttons";
import ActionSheetMenu from "@/components/action-sheet-menu";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const MyApp: AppType = ({Component, pageProps}) => {
    return (
        <main className={`font-sans ${inter.variable}`}>
            <NextUIProvider>
                <ActionSheetButtons/>
                <Component {...pageProps} />
                <ActionSheetMenu/>
                <Analytics/>
            </NextUIProvider>
        </main>
    );
};

export default appWithTranslation(MyApp)
