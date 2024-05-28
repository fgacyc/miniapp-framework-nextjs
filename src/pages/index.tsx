import {useEffect, useState} from "react";
import {useRouter} from 'next/navigation'
import Image from "next/image";
import ProfileToken from "@/components/profile-token";
import {useUserStore} from "@/store/use-store";

import { useTranslation } from 'next-i18next'

export default function Index() {
    const [count, setCount] = useState(0)
    const router = useRouter()
    const [UID,language] = useUserStore(state => [state.UID,state.language]);
    const { t } = useTranslation();
    const initUser = useUserStore(state => state.initUser);

    useEffect(() => {
        void initUser();
    }, [initUser]);

    function goToAbout() {
        router.push('/about');
    }

    return (
        <div>
            <div className={"h-screen flex flex-col justify-center items-center"}>
                {/*<Profile />*/}
                <ProfileToken/>
                <div className={"flex flex-row justify-between items-center w-[300px] "}>
                    <div onClick={goToAbout}>
                        <Image src={"/fga_tech.png"} className="cursor-pointer" width={112} height={112}
                               alt="Vite logo"/>
                    </div>
                    <div onClick={goToAbout}>
                        <Image src={'next-js.svg'} className="cursor-pointer" width={112} height={112}
                               alt="React logo"/>
                    </div>
                </div>
                <h1 className={"text-black font-bold text-4xl text-center my-8"}>{t("MiniApp Framework")}</h1>
                <div>{UID} | {language}</div>
                <div className="text-center p-8">
                    <button className={`text-white rounded-lg bg-[#1a1a1a] py-2 px-4 border-2
                cursor-pointer border-transparent hover:border-[#192F8A] transition duration-300 ease-in-out`}
                            onClick={() => setCount((count) => count + 1)}>
                        {t("count is")} {count}
                    </button>
                    <p className={"my-4"}>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className="text-[#888888] text-center my-4">
                    {t("Click on the logos to learn more")}
                </p>
            </div>
        </div>

    )
}